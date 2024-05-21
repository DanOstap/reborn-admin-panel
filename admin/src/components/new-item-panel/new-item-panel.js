import React, { useState } from 'react';
import './new-item-panel.css'

const NewItem  = () =>{
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        size: '',
        image: null,
        imageUrl: ''
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        console.log(name,value);
        if (name === 'myImage') {
          const file = files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setFormData((prevData) => ({
                ...prevData,
                image: file,
                imageUrl: reader.result
              }));
            };
            reader.readAsDataURL(file);
          }
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        }
    }
        return(
            <div id='Main'>
                <div id='LeftHalf'>
                    <label>Name</label>
                    <br/>
                <input type="text" id="nameItem" name="name" size="50 " onChange={handleChange}/>
                <br/>
                <label>Price</label>
                <br/>
                <input type="number" id="nameItem" name="price" size="50" onChange={handleChange}/>
                <br/>
                <label>Size</label>
                <br/>
                <input type="text" id="nameItem" name="size" size="50" onChange={handleChange}/>
                <br/>
                <br/>
                <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
                <input type="submit" id="" name="" size="10"/>
                
                </div>
                <div id='RightHalf'>
            {formData.imageUrl && (<p><strong>Image:</strong><br /><img src={formData.imageUrl} alt="Uploaded" width="200" /></p>)}
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Price:</strong> {formData.price} $</p>
            <p><strong>Size:</strong> {formData.size}</p>
            </div>

            </div>
    )
}
export default NewItem;