import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App'
import { ScrollControls } from '@react-three/drei'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas dpr={[1, 2]}>
        <ScrollControls pages={5}> 
            <App/>
        </ScrollControls>
    </Canvas>
)