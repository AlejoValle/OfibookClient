import Button from '../../Button/Button';
import classes from './NewPostForm.module.scss';
import { MdPublic } from 'react-icons/md';
import { useState } from 'react';
import { toast } from 'react-toastify';

const NewPostForm = ({ onAddPost = () => {} }) => {
    const [titleField, setTitle] = useState(" ");
    const [descriptionField, setDescription] = useState(" ");
    const [imageField, setImage] = useState(" ");

    const errors = {
        "title": !titleField,
        "description": !descriptionField || descriptionField.length > 300,
        "image": imageField.length > 0 && !(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi).test(imageField)
    }

    const hasErrors = () => {
        return Object.values(errors).some(error => error);
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(hasErrors()) {
            toast.warn("Tus campos están mal!")
            return;
        }


        //Ejecutar el insert al server
        onAddPost(titleField, descriptionField, imageField);

        setTitle("");
        setDescription("");
        setImage("");
    }

    return (
        <section className= {classes ['post-form-section']}>
            <h3> ¿Necesitas ayuda de un profesional? </h3>

            <form onSubmit={onSubmitHandler}>
                <label>
                    ¿Elige tus preferencias del profesional que buscas? *
                    <input name="title"
                    className={ errors["title"] ? classes["error"] : "" } 
                    value = {titleField}
                    placeholder='titulo de tu necesidad'  
                    onChange = {(e) => { setTitle(e.target.value)}}
                    />
                </label>

                <label>
                    Describe tu problema *
                    <textarea name="description" 
                    rows={5}
                    className={ errors["description"] ? classes["error"] : "" } 
                    value= {descriptionField}
                    placeholder="Describe tu necesidad"
                    onChange = {(e) => { setDescription(e.target.value)}} 
                    />

                    <div className={classes["chars-left"]}>
                        { descriptionField.length } / 300
                    </div>
                </label>

                <label>
                    Fotografía de mi problema
                    <input name="image" 
                    type="url"
                    className={ errors["image"] ? classes["error"] : "" }
                    placeholder='https://example.io/image.png' 
                    value={ imageField }
                    onChange= { (e) => {setImage(e.target.value)}} />
                </label>

                <Button type="submit" disabled={hasErrors()}>
                    <MdPublic /> Publicar Oportunidad!
                </Button>  
            </form>

        </section>
    )
}

export default NewPostForm;