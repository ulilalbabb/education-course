import CardProfile from "../Elements/CardProfile/CardProfile"

const FinalCardProject = (props) => {
    const {title} = props
    return(
        <div className="px-5 py-5">
            <div className="bg-white px-5 py-5 border border-gray-200 rounded-xl">
                <h1 className="font-bold pb-4">{title}</h1>
                <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
                <CardProfile 
                    image="./assets/profileAvatar.png"
                    name="Arshaka"
                    position="Kakak dari Kaluna"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam culpa magni, officia accusantium eligendi voluptatem ducimus qui sapiente! Provident, consequuntur aliquid porro minus dolore ratione ipsam
                                laborum cumque ad impedit ducimus voluptatem libero expedita voluptates id aut necessitatibus inventore ex at est facilis odio tempora architecto. Exercitationem, officiis nisi?"
                />
                <CardProfile 
                    image="profile"
                    name="Arshaka"
                    position="Kakak dari Kaluna"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam culpa magni, officia accusantium eligendi voluptatem ducimus qui sapiente! Provident, consequuntur aliquid porro minus dolore ratione ipsam
                                laborum cumque ad impedit ducimus voluptatem libero expedita voluptates id aut necessitatibus inventore ex at est facilis odio tempora architecto. Exercitationem, officiis nisi?"
                />
                </div>
            </div>
        </div>
    )
}

export default FinalCardProject