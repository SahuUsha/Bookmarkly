import { useRef,  useMemo } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// BubbleBackground component for floating bubbles animation
type Bubble = {
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

export const BubbleBackground: React.FC = () => {
  const bubbles: Bubble[] = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        size: Math.random() * 60 + 20,
        left: Math.random() * 100,
        animationDuration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble, idx) => (
        <span
          key={idx}
          style={{
            position: 'absolute',
            bottom: -bubble.size,
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: '#d0cdf9',
            borderRadius: '50%',
            animation: `floatUp ${bubble.animationDuration}s linear ${bubble.delay}s infinite`,
          }}
        />
      ))}
     <style>{`
  @keyframes floatUp {
    to { transform: translateY(-110vh); }
  }
`}</style>
    </div>
  )
}

const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSignIn = async () => {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/signin`, { username, password })
      if (res) {
        const jwtToken = res.data.data
        localStorage.setItem('token', jwtToken)
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Error signing in:', error)
      alert('Error signing in: invalid username or password')
    }
  }

  return (
    <div className="relative h-screen w-screen bg-[#e0dfeb] flex justify-center items-center">
      {/* Floating bubbles background */}
      <BubbleBackground />

      <div className="absolute flex flex-col items-center">
        <div className="flex font-semibold p-16 text-[#554dcd] items-center">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-13">
  <path fill-rule="evenodd" stroke-linejoin="round" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z" clip-rule="evenodd" />
</svg>
          <h1 className="text-5xl mb-1 pl-1 text-black">Bookmarkly</h1>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-[#9d9abe] min-w-[300px]">
          <h1 className="text-center font-bold text-[1.3rem] text-[#281f8b] p-3">SignIn</h1>

          <div className="flex flex-col gap-4 mt-4">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
          </div>

          <div className="mt-6">
            <Button
              loading={false}
              variant="primary"
              size="md"
              text="SignIn"
              onClick={handleSignIn}
              fullWidth
            />
          </div>

          <p className="text-center mt-4">
            Not signed up?{' '}
            <button onClick={() => navigate('/')} className="font-bold text-[#281f8b]">
              SignUp
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
