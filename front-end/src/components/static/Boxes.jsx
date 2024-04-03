import React from 'react'

const Boxes = ({ boxses }) => {

    return (
        <div className="relative mx-auto max-w-xs md:max-w-xl lg:max-w-5xl grid grid-cols-1 gap-5 pb-14 pt-14 sm:grid-cols-2 lg:grid-cols-4 space_small">
            {boxses && boxses.map((item) => (
                <div key={item.title} className="rounded-md border border-[#DBDFD0] bg-white p-8 text-center shadow
                   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-[#AD343E]">
                        <img src={process.env.PUBLIC_URL + `/icones/${item.picture}`} alt="breakfast" className=' w-8' />
                    </div>
                    <h3 className="mt-6 text-[#2C2F24] font-semibold"> {item.title} </h3>
                    <p className="my-4 mb-0 font-normal text-sm  text-[#414536]"> {item.description} </p>
                </div>
            ))}

        </div>
    )
}

export default Boxes
