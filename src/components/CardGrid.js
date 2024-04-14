import { useState } from "react"
import Card from "./Card"
import Modal from "./Modal"

const CardGrid=()=>{
    const [openModal, setOpenModal] = useState(false);
    const openDialog=()=>{
        setOpenModal(!openModal)
    }
    return(
        <>
<div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Explore Your New Teammates</h1>
</div>
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
{
    [1,2,3,4,5,6].map(()=>{
        return(
            <>
            <Card openDialog={openDialog}/>
            </>
        )
    })
}
{
    openModal && (
      <div><Modal openDialog={openDialog}/></div>
    )
}
</section>
</>
    )
}

export default CardGrid