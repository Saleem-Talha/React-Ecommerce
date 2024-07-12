import React from 'react'

export default function Hero() {
  return (
    <div>
        <Hero></Hero>
      <div
        className="bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtgxTJnQ6ZP3Y6N1Y5yST24KGL6JoTuRBXTyv0frWX2f8EeUU5Y0MRzIusJNTUsF2Obg&usqp=CAU')`,
          height: "40vh", 
        }}
      >
        <div className="container mx-auto p-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl font-bold mb-4 text-center">Sports Store</h2>
          <p className="text-lg">Saleem Talha</p>
        </div>
      </div>
    </div>
  )
}
