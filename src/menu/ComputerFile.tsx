interface ComputerFileProps {
    url: string,
    img: string,
    name: string
}

const ComputerFile = (props: ComputerFileProps) => {
    return (
        <a className="text-center" href={props.url}>
            <div className="m-auto w-14 h-20">
                <img
                    src={props.img}
                    alt="file icon"
                    width="100%"
                    height="auto"
                    className=""
                ></img>
            </div>
            <p className="w-20 text-sm text-center text-white break-all">{props.name}</p>
        </a>
    )
}

export default ComputerFile;