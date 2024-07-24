"use client";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import "./styles.sass";

const Contacts = () => {
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const processedPhone = formData.phone.replace(/\D/g, "");
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        phone: processedPhone,
      }),
    });
    if (response.status === 200 || response.status === 201) {
      toast.success("Поздравялем, ваша заявка принята!");
    } else {
      toast.error("К сожалению, что-то пошло не так, попробуйте еще раз :(");
    }
    setFormData({
      fullName: "",
      phone: "",
    });
  };
  return (
    <section
      className='sectionContacts'
      id='contacts'
    >
      {/* <div className='container'> */}
      <div className='contactsContainer'>
        <p className='text'>Свяжитесь с нами</p>
        <form
          className='contactsForm'
          onSubmit={handleSubmit}
        >
          <div className='inputBox'>
            <input
              type='text'
              className='input'
              name='fullName'
              placeholder='Ф.И.О'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='inputBox'>
            <IMaskInput
              name='phone'
              className='input'
              placeholder='Номер телефона'
              mask={Mask}
              value={formData.phone}
              onChange={handleChange}
              pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
              maxLength={19}
              required
            />
          </div>
          <button className='btn'>Подать заявку</button>
        </form>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contacts;
