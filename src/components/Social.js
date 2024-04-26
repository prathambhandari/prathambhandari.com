import React from "react";
import { SocialIcon } from 'react-social-icons';
function Socials(){
    return(
        <div className="flex justify-center items-start bg-slate-100 p-10">
            <SocialIcon url="https://twitter.com/bhandariprath" network="twitter" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            {/* <SocialIcon url="https://www.linkedin.com/in/prathambhandari/" network="linkedin" target="_blank" fgColor="#000" bgColor="transparent"  style={{ height: 60, width: 60 }}/> */}
            <SocialIcon url="https://www.instagram.com/bhandariprath/" network="instagram" target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            {/* <SocialIcon url="https://www.youtube.com/channel/UCeVe4cXVtvN0p4Rcw8sQNBw" network="youtube"  target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/> */}
            {/* <SocialIcon url="https://github.com/prathambhandari" network="github" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/> */}
            {/* <SocialIcon url="https://www.buymeacoffee.com/prathambhandari" network="buymeacoffee" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/> */}
        </div>
    )
}
export default Socials;