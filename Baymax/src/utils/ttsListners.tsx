import Tts from "react-native-tts"



export const initializeTtsListeners=async()=>{
    Tts.getInitStatus().then(
        (e)=>{
            console.log(e);
            console.log("All ok TTS");
        },
        
        (err)=>{
            if(err.code==='no_engine'){
                console.log("No Engine TTS ");
                Tts.requestInstallEngine();
            }
        }
    )

    //voices
    const voices=await Tts.voices();
    console.log(voices);
    // Tts.setDefaultVoice('hi-in-x-hid-network')


    Tts.setDefaultRate(0.55,true);
    Tts.setIgnoreSilentSwitch('ignore');
    // Tts.setDefaultPitch(0.7)

    Tts.addEventListener('tts-start',(event)=>{
        console.log("TTS started : ",event);
    })
    // Tts.addEventListener('tts-progress',(event)=>{
    //     console.log("TTS tts-progress : ",event);
    // })
    Tts.addEventListener('tts-finish',(event)=>{
        console.log("TTS tts-finish : ",event);
    })

    Tts.addEventListener('tts-cancel',(event)=>{
        console.log("TTS tts-cancel : ",event);
    })
}