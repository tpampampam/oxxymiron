import { ChangeEvent, FormEvent, useState } from "react";
import Icon from "./Icon"



const FooterForm = () => {

    const [state, setState] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setState('')
    }

    return(
        <form className="footer-form" onSubmit={handleSubmit}>
            <p>онлифанс окси</p>

            <div className="footer-form__email">
                <input 
                    type="email" 
                    value={state} 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="footer-form__button">
                <span>Subscribe</span>
                <Icon name='arrow-right' />
            </button>
        </form>
    )
}
export default FooterForm;