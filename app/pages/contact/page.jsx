"use client"

const Contactus = ({ name }) => (
    <div className="contacUs">
        <input type="text" placeholder="Name*" className="contacUs-input" />
        <input type="text" placeholder="Surname*" className="contacUs-input" />
        <input type="email" placeholder="Email*" className="contacUs-input" />
        <input type="text" placeholder="Job*" className="contacUs-input" />
        <textarea type="text" placeholder="Message content*" className="contacUs-input"></textarea>
        <div className="contacUs-upload-title">Upload your file here</div>
        <div className="contacUs-upload">
            <input type="file" id="fileUpload" className="contacUs-upload-button" />
            <div className="contacUs-upload-warrning">Max. file size: 128 MB.</div>
        </div>

        <div className="contacUs-send-button">
            Send
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
)
export default Contactus;