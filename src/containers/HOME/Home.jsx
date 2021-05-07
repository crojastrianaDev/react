import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Foto from "../../assets/fotoAlejandroRojas.jpeg";
import Logo from "../../components/Logo/Logo";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Logo></Logo>
        <div class="media border p-4">
          <img src={Foto} alt="Foto" class="mr-3 mt-3 rounded-circle" />
          <div class="media-body">
            <h4>MI BIOGRAFIA</h4>
            <p>
              Where can I get some? There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. paragraphs words bytes lists Start
              with 'Lorem ipsum dolor sit amet...'
            </p>
            <h4>MI BIOGRAFIA</h4>
            <p>
              Where can I get some? There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. paragraphs words bytes lists Start
              with 'Lorem ipsum dolor sit amet...'
            </p>
            <h4>MI BIOGRAFIA</h4>
            <p>
              Where can I get some? There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. paragraphs words bytes lists Start
              with 'Lorem ipsum dolor sit amet...'
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
