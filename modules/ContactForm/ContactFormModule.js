import React, { useState, useRef } from "react";
import styled from "styled-components";
import DescWithIcon from "@components/Form/DescWithIcon";
import InputForm from "@components/Form/InputForm";
import InputTextArea from "@components/Form/InputTextArea";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BlueButton, TransButton } from "@components/style";
import axios from "axios";
import emailjs from "@emailjs/browser";
import MyModal from "@components/modal";
import Loading from "@components/Loading";

const MyInfoData = [
  {
    title: "(+66) 63-198-7380",
    icon: <BsTelephoneForward />,
    href: "tel:063-198-7380",
  },
  {
    title: "napat.jaiyim@hotmail.com",
    icon: <HiOutlineMail />,
    href: "mailto:napat.jaiyim@hotmail.com",
  },
  {
    title: "Napat Jaiyim",
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/napat-jaiyim-538249195/",
  },
];

export default function ContactFormModule() {
  const resetFormData = {
    firstname: null,
    lastname: null,
    email: null,
    subject: null,
    msg: null,
  };
  const [formData, setFormData] = useState(resetFormData);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleFormData = (value) => {
    setFormData({
      ...formData,
      ...value,
    });
  };

  const form = useRef();
  const clearData = () => {
    document.getElementById("contact-data").reset();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_b82ttf4",
        "template_g2cft5k",
        form.current,
        "fK3ajTjAX9N9_lRLl"
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true);
          clearData();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {loading && <Loading title="Sending..." />}
      <div
        data-aos="fade-up"
        className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
      >
        <Card id="contact">
          <Left>
            <Title className="text-white">CONTACT ME</Title>
            <CardInfo>
              {MyInfoData.map((item, index) => (
                <DescWithIcon
                  href={item.href}
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  className="text-white"
                />
              ))}
            </CardInfo>
          </Left>
          <Right>
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-data"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <HalfContainer>
                <div className="input-container">
                  <label className="text-white">Firstname *</label>
                  <input
                    type="text"
                    name="firstname"
                    className="input-form"
                    required
                  />
                </div>
                <div className="input-container">
                  <label className="text-white">Lastname *</label>
                  <input
                    type="text"
                    name="lastname"
                    className="input-form"
                    required
                  />
                </div>
              </HalfContainer>
              <div className="input-container">
                <label className="text-white">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="input-form"
                  required
                />
              </div>
              <div className="input-container">
                <label className="text-white">Subject *</label>
                <input name="subject" className="input-form" required />
              </div>
              <div className="input-container">
                <label className="text-white">Message *</label>
                <textarea name="msg" className="input-form" required />
              </div>
              <HalfContainer style={{ marginTop: "10px" }}>
                <BlueButton type="submit">Send</BlueButton>
                <TransButton type="reset">CLEAR</TransButton>
              </HalfContainer>
            </form>
          </Right>
        </Card>
      </div>
      {showModal && <MyModal setOpenModal={setShowModal} />}
    </>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
  height: auto;
  padding: 60px;
  border: 3px solid #0078ae;
  border-radius: 10px;
  display: flex;
  box-shadow: inset 0 0 20px #0078ae;
  gap: 10px;

  background-image: url("/contact-me.png");
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: -10% 120%;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 720px) {
    background-image: none;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Left = styled.div`
  width: 40%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const HalfContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 900px) {
    flex-direction: ${(p) => p.column};
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CardInfo = styled.div`
  padding: 10px;
`;
