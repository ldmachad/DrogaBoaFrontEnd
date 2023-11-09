function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Droga Boa
                        </h2>
                        <p className='text-xl'>
                            Prezando sempre pela sua saúde!
                        </p>
                    </div>

                    <div className="flex justify-center p-8">
                        <img
                            src="https://i.pinimg.com/originals/b7/21/6b/b7216b596768a00970f08dbbd187f038.png"
                            alt="Imagem Página Home"
                            className='w-1/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home