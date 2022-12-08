import { useGLTF, useScroll, Text, Scroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef} from 'react'


export default function App() {
    const model = useGLTF('/iphone_14_pro_max.glb');

    const scroll = useScroll()

    const iphone = useRef()
    const first = useRef()
    const second = useRef()

    useFrame((state, delta) => {
        const r1 = scroll.range(0 / 4, 1 / 4)
        const r2 = scroll.range(1 / 4, 1 / 4)
        const r3 = scroll.range(2 / 4, 1 / 4)
        const r4 = scroll.range(3 / 4, 1 / 4)
        const r5 = scroll.range(1 / 4, 1 / 4)

        iphone.current.rotation.y = (Math.PI * 0.67) + r1 + r2 + r3 + r4 * 2
    })

    return(
        <>
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <primitive ref={iphone} object={model.scene} scale={20} position={ [ 0, -1.5, 0] }/>

            <Scroll>
                <group ref={first}>
                    <Text
                        scale={15}
                        color="black"
                        position={[-1.5, 1.5, -1]}
                    >
                        PRO
                    </Text>

                    <Text
                        scale={15}
                        color="black"
                        position={[3, -1.8, -1]}
                    >
                        BEYOND
                    </Text>
                </group>

                <group>
                    <Text
                        scale={4}
                        color="black"
                        position={[-2, -9.5, -1]}
                        maxWidth={1}
                    >
                        Surgical-grade stainless steel.
                    </Text>

                    <Text
                        scale={4}
                        color="black"
                        position={[2.8, -6, -1]}
                        maxWidth={0.7}
                    >
                        6.1'' and 6.7'' display sizes.
                    </Text>

                </group>
                    
                <group>
                    <Text
                        scale={15}
                        color="black"
                        position={[-3, -18.5, -1]}
                        className="first"
                    >
                        more
                    </Text>

                    <Text
                        scale={15}
                        color="black"
                        position={[2.5, -20.5, -1]}
                        className="first"
                        font='./PlayfairDisplay-Italic.ttf'
                        lineHeight={1}
                    >
                        slim
                    </Text>
                </group>

                <group>
                    <Text
                        scale={8}
                        color="black"
                        position={[-4, -28.7, -1]}
                        className="first"
                    >
                        mind
                    </Text>

                    <Text
                        scale={20}
                        color="black"
                        position={[-0.6, -30.2, -1]}
                        className="first"
                        font='./PlayfairDisplay-Italic.ttf'
                    >
                        blow   ing
                    </Text>

                    <Text
                        scale={8}
                        color="black"
                        position={[3, -32, -1]}
                        className="first"
                    >
                        detail
                    </Text>
                </group>

            </Scroll>

            {/* <Scroll html>
                <div ref={second}>
                    <div style={{ position: "absolute", top: '60vh', left: '8em' }}></div>
                    <div style={{ position: "absolute", top: '30vh', left: '18em' }}></div>
                    <h1 style={{ top: '160vh', left: '5em' }}>Surgical-grade <br /> stainless steel.</h1>
                    <h1 style={{ top: '134vh', left: '17em' }}>6.1'' and 6.7'' <br /> display sizes.</h1>
                </div>
            </Scroll> */}
        </>
    )
}