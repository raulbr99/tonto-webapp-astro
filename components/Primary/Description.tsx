import { useState } from "react"
import Linkify from 'react-linkify';

const Description = (props: any) => {
    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
    return (
        <Linkify properties={{
            target: '_blank',
            style: { fontWeight: "bold" },
          }}>
            <div id="text" className="px-4 text-[14px] text-[#5F5F5F] dark:text-[#EBEBEB] leading-4 mt-2">
                {props.text.length > 200 ?
                    isReadMoreShown ? props.text + " " : props.text.substr(0, 200) + "... ":
                    props.text
                }
                {props.text.length > 200 &&
                    <button onClick={toggleBtn} className="font-bold text-[#109c90] dark:text-[#00eedc]">
                        {isReadMoreShown ? ' see less' : 'see more'}
                    </button>
                }

            </div>
        </Linkify>
    )
}

export default Description