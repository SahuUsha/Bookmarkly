
// import './App.css'

import axios from "axios"
import { Card } from "../components/Card"
import CreateContentModel from "../components/CreateContentModel"
import Sidebar from "../components/Sidebar"

import { Button } from "../components/ui/Button"
import UseContent from "../hook/useContent"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { useState } from "react"
import { BACKEND_URL } from "../config"

interface Content {
  type: "twitter" | "youtube"
  link: string
  title: string
  _id: string
  userId: string
}


function Dashboard() {
  const [modelOpen, setModelOpen] = useState<boolean>(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [contents, refresh] = UseContent() as [Content[], () => void]

  const filteredContents = selectedPlatform === 'all'
    ? contents
    : contents.filter(item => item.type === selectedPlatform)

  const handleShareUrl = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        { headers: { "Authorization": localStorage.getItem("token") || '' } }
      )
      const shareUrl = `localhost:5173/share/${response.data.data.hash}`
      alert(`Share link : ${shareUrl}`)
    } catch (error) {
      console.error("Error sharing url:", error)
      alert("Error sharing url")
    }
  }

  return (
    <div>
      <Sidebar onSelect={setSelectedPlatform} />
      <div className="p-4 ml-76 bg-slate-50 min-h-screen border-2 border-gray-300">
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        <div className="flex justify-end mb-4 gap-4">
          <Button
            variant="secondary"
            startIcon={<ShareIcon size="lg" />}
            onClick={handleShareUrl}
            text="Share Brain"
            size="md"
          />
          <Button
            variant="primary"
            startIcon={<PlusIcon size="lg" />}
            onClick={() => setModelOpen(true)}
            text="Add content"
            size="md"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {filteredContents.map(({ type, link, title, _id, userId }) => (
            <Card key={_id} type={type} link={link} id={_id} title={title} userId={userId} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard