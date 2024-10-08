import './App.css';
import React, { useState, useRef, useEffect } from "react";
import Fix from "./img/fix.png"
import whitecap from "./img/items/whitecap.png"
import pinkcap from "./img/items/pinkcap.png"
import redcap from "./img/items/redcap.png"
import bluecap from "./img/items/bluecap.png"
import greencap from "./img/items/greencap.png"
import orangecap from "./img/items/orangecap.png"
import purplecap from "./img/items/purplecap.png"
import yellowcap from "./img/items/yellowcap.png"
import whiteshirt from "./img/roupa/whiteshirt.png"
import pinkshirt from "./img/roupa/pinkshirt.png"
import redshirt from "./img/roupa/redshirt.png"
import blueshirt from "./img/roupa/blueshirt.png"
import greenshirt from "./img/roupa/greenshirt.png"
import orangeshirt from "./img/roupa/orangeshirt.png"
import purpleshirt from "./img/roupa/purpleshirt.png"
import yellowshirt from "./img/roupa/yellowshirt.png"
import whitebut from "./img/tenis/whitebut.png"
import pinkbut from "./img/tenis/pinkbut.png"
import redbut from "./img/tenis/redbut.png"
import bluebut from "./img/tenis/bluebut.png"
import greenbut from "./img/tenis/greenbut.png"
import orangebut from "./img/tenis/orangebut.png"
import purplebut from "./img/tenis/purplebut.png"
import yellowbut from "./img/tenis/yellowbut.png"
import neck1 from "./img/colar/neck1.png"
import neck2 from "./img/colar/neck2.png"
import neck3 from "./img/colar/neck3.png"
import neck4 from "./img/colar/neck4.png"
import neck5 from "./img/colar/neck5.png"
import neck6 from "./img/colar/neck6.png"
import neck7 from "./img/colar/neck7.png"
import neck8 from "./img/colar/neck8.png"
import back1 from "./img/back/back1.png"
import back2 from "./img/back/back2.png"
import back3 from "./img/back/back3.png"
import back4 from "./img/back/back4.png"
import back5 from "./img/back/back5.png"
import back6 from "./img/back/back6.png"
import back7 from "./img/back/back7.png"
import back8 from "./img/back/back8.png"
import side1 from "./img/side/side1.png"
import side2 from "./img/side/side2.png"
import side3 from "./img/side/side3.png"
import side4 from "./img/side/side4.png"
import side5 from "./img/side/side5.png"
import side6 from "./img/side/side6.png"
import side7 from "./img/side/side7.png"
import side8 from "./img/side/side8.png"
import face1 from "./img/face/face1.png"
import face2 from "./img/face/face2.png"
import face3 from "./img/face/face3.png"
import face4 from "./img/face/face4.png"
import face5 from "./img/face/face5.png"
import face6 from "./img/face/face6.png"
import face7 from "./img/face/face7.png"
import face8 from "./img/face/face8.png"
import realbut1 from "./img/realbut/realbut1.png"
import realbut2 from "./img/realbut/realbut2.png"
import realbut3 from "./img/realbut/realbut3.png"
import realbut4 from "./img/realbut/realbut4.png"
import realbut5 from "./img/realbut/realbut5.png"
import realbut6 from "./img/realbut/realbut6.png"
import realbut7 from "./img/realbut/realbut7.png"
import realbut8 from "./img/realbut/realbut8.png"
import sausage from "./img/sausage.png"

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [cap, setCap] = useState(null);
  const [shirt, setShirt] = useState(null);
  const [but, setBut] = useState(null);
  const [neck, setNeck] = useState(null);
  const [back, setBack] = useState(null);
  const [side, setSide] = useState(null);
  const [face, setFace] = useState(null);
  const [realbut, setRealbut] = useState(null);
  const visualizerRef = useRef(null);

  const colors = ["white", "pink", "red", "blue", "green", "orange", "purple", "yellow"];
  const caps = [whitecap, pinkcap, redcap, bluecap, greencap, orangecap, purplecap, yellowcap];
  const shirts = [whiteshirt, pinkshirt, redshirt, blueshirt, greenshirt, orangeshirt, purpleshirt, yellowshirt];
  const buts = [whitebut, pinkbut, redbut, bluebut, greenbut, orangebut, purplebut, yellowbut];
  const necks = [neck1, neck2, neck3, neck4, neck5, neck6, neck7, neck8]
  const backs = [back1, back2, back3, back4, back5, back6, back7, back8]
  const sides = [side1, side2, side3, side4, side5, side6, side7, side8]
  const faces = [face1, face2, face3, face4, face5, face6, face7, face8]
  const realbuts = [realbut1, realbut2, realbut3, realbut4, realbut5, realbut6, realbut7, realbut8]

  function changeColor(color) {
    setBackgroundColor(color);
  }

  function putCap(cap) {
    setCap(cap);
  }

  function putShirt(shirt) {
    setShirt(shirt);
  }

  function putBut(but) {
    setBut(but);
  }

  function putNeck(neck) {
    setNeck(neck);
  }

  function putBack(back) {
    setBack(back);
  }

  function putSide(side) {
    setSide(side);
  }

  function putFace(face) {
    setFace(face);
  }

  function putRealBut(realbut) {
    setRealbut(realbut);
  }


  useEffect(() => {
    if (cap === null) {
      f2.current.style.display = "none";
    }
    else {
      f2.current.style.display = "block";
      f7.current.style.display = "none";
    }
    if (shirt === null) {
      f3.current.style.display = "none";
    }
    else {
      f3.current.style.display = "block";
    }
    if (but === null) {
      f1.current.style.display = "none";
    }
    else {
      f1.current.style.display = "block";
    }
    if (neck === null) {
      f4.current.style.display = "none";
    }
    else {
      f4.current.style.display = "block";
    }
    if (back === null) {
      f5.current.style.display = "none";
    }
    else {
      f5.current.style.display = "block";
    }
    if (side === null) {
      f6.current.style.display = "none";
    }
    else {
      f6.current.style.display = "block";
    }
    if (face === null) {
      f7.current.style.display = "none";
    }
    else {
      f7.current.style.display = "block";
      f2.current.style.display = "none";
    }
    if (realbut === null) {
      f8.current.style.display = "none";
    }
    else {
      f8.current.style.display = "block";
    }
  }, [cap, shirt, but, neck, back, side, face, realbut])

  // Função para gerar a combinação aleatória
  // Função para gerar a combinação aleatória
  // Evitar duplicidade e ajustes gerais na função generateRandomCombination
  function generateRandomCombination() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomCap = caps[Math.floor(Math.random() * caps.length)];
    const randomShirt = shirts[Math.floor(Math.random() * shirts.length)];
    const randomBut = buts[Math.floor(Math.random() * buts.length)];
    const randomNeck = necks[Math.floor(Math.random() * necks.length)];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    const randomRealbut = realbuts[Math.floor(Math.random() * realbuts.length)];

    const useBack = Math.random() > 0.5;
    if (useBack) {
      const randomBack = backs[Math.floor(Math.random() * backs.length)];
      putBack(randomBack);
      changeColor(""); // Reseta o backgroundColor
      f5.current.style.display = "block";
    } else {
      changeColor(randomColor);
      putBack(null); // Reseta o back
      f5.current.style.display = "none";
    }

    const useFace = Math.random() > 0.5;
    if (useFace) {
      putFace(randomFace);
      f7.current.style.display = "block";
    } else {
      putCap(randomCap);
      putFace(null); // Reseta o Face
      f7.current.style.display = "none";
    }

    const useBut = Math.random() > 0.5;
    if (useBut) {
      const randomBut = buts[Math.floor(Math.random() * buts.length)];
      putBut(randomBut);
      putRealBut(null); // Reseta o backgroundColor
      f1.current.style.display = "block";
    } else {
      putRealBut(randomRealbut);
      putBut(null); // Reseta o back
      f1.current.style.display = "none";
    }


    // Aplicar o resto dos itens
    putShirt(randomShirt);
    putBut(randomBut);
    putNeck(randomNeck);
    putSide(randomSide);
    putRealBut(randomRealbut)
  }


  // Função para gerar a imagem de download
  function downloadImage() {
    const visualizer = visualizerRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Obtém o tamanho exato da div visualizer
    const rect = visualizer.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Desenha o background
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Desenha as imagens corretamente com as posições relativas
    const images = visualizer.querySelectorAll("img");
    images.forEach((img) => {
      if (img.src) {
        const imgRect = img.getBoundingClientRect();
        context.drawImage(
          img,
          imgRect.left - rect.left, // Posição X relativa à div visualizer
          imgRect.top - rect.top,   // Posição Y relativa à div visualizer
          img.width,
          img.height
        );
      }
    });

    // Cria um link para download
    const link = document.createElement("a");
    link.download = "visualizer.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  const f1 = useRef()
  const f2 = useRef()
  const f3 = useRef()
  const f4 = useRef()
  const f5 = useRef()
  const f6 = useRef()
  const f7 = useRef()
  const f8 = useRef()

  return (
    <div className="App">
      <div className="env-title">
      <img src={sausage} alt="" />
        <h1>$SAUSAGEDOG</h1>
      </div>
      <div className="env-site">
        <div className="env-visu">
          <div className="env-but">
            <button onClick={generateRandomCombination}>RANDOM DOG</button>
            <button onClick={downloadImage}>DOWNLOAD</button>
          </div>
          <div className="visualizer" style={{ backgroundColor: backgroundColor }} ref={visualizerRef}>
            <img ref={f5} className='f5' src={back} alt="visualizer" />
            <img className='f1' src={Fix} alt="visualizer" />
            <img ref={f2} className='f3' src={cap} alt="visualizer" />
            <img ref={f3} className='f2' src={shirt} alt="visualizer" />
            <img ref={f1} className='f1' src={but} alt="visualizer" />
            <img ref={f8} className='f8' src={realbut} alt="visualizer" />
            <img ref={f4} className='f4' src={neck} alt="visualizer" />
            <img ref={f6} className='f6' src={side} alt="visualizer" />
            <img ref={f7} className='f7' src={face} alt="visualizer" />
          </div>
        </div>
        <div className="env-dash">
          <div className="dashboard">
            <div className="add x" onClick={() => changeColor("white")}>X</div>
            <div className="add white" onClick={() => changeColor("lightblue")}></div>
            <div className="add pink" onClick={() => changeColor("pink")}></div>
            <div className="add red" onClick={() => changeColor("red")}></div>
            <div className="add blue" onClick={() => changeColor("blue")}></div>
            <div className="add green" onClick={() => changeColor("green")}></div>
            <div className="add orange" onClick={() => changeColor("orange")}></div>
            <div className="add purple" onClick={() => changeColor("purple")}></div>
            <div className="add yellow" onClick={() => changeColor("yellow")}></div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putCap(null)}>X</div>
            <div className="add" onClick={() => putCap(whitecap)}> <img src={whitecap} alt="" /> </div>
            <div className="add" onClick={() => putCap(pinkcap)}> <img src={pinkcap} alt="" /> </div>
            <div className="add" onClick={() => putCap(redcap)}> <img src={redcap} alt="" /> </div>
            <div className="add" onClick={() => putCap(bluecap)}> <img src={bluecap} alt="" /> </div>
            <div className="add" onClick={() => putCap(greencap)}> <img src={greencap} alt="" /> </div>
            <div className="add" onClick={() => putCap(orangecap)}> <img src={orangecap} alt="" /> </div>
            <div className="add" onClick={() => putCap(purplecap)}> <img src={purplecap} alt="" /> </div>
            <div className="add" onClick={() => putCap(yellowcap)}> <img src={yellowcap} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putShirt(null)}>X</div>
            <div className="add" onClick={() => putShirt(whiteshirt)}> <img src={whiteshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(pinkshirt)}> <img src={pinkshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(redshirt)}> <img src={redshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(blueshirt)}> <img src={blueshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(greenshirt)}> <img src={greenshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(orangeshirt)}> <img src={orangeshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(purpleshirt)}> <img src={purpleshirt} alt="" /> </div>
            <div className="add" onClick={() => putShirt(yellowshirt)}> <img src={yellowshirt} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putBut(null)}>X</div>
            <div className="add" onClick={() => putBut(whitebut)}> <img src={whitebut} alt="" /> </div>
            <div className="add" onClick={() => putBut(pinkbut)}> <img src={pinkbut} alt="" /> </div>
            <div className="add" onClick={() => putBut(redbut)}> <img src={redbut} alt="" /> </div>
            <div className="add" onClick={() => putBut(bluebut)}> <img src={bluebut} alt="" /> </div>
            <div className="add" onClick={() => putBut(greenbut)}> <img src={greenbut} alt="" /> </div>
            <div className="add" onClick={() => putBut(orangebut)}> <img src={orangebut} alt="" /> </div>
            <div className="add" onClick={() => putBut(purplebut)}> <img src={purplebut} alt="" /> </div>
            <div className="add" onClick={() => putBut(yellowbut)}> <img src={yellowbut} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putNeck(null)}>X</div>
            <div className="add" onClick={() => putNeck(neck1)}> <img src={neck1} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck2)}> <img src={neck2} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck3)}> <img src={neck3} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck4)}> <img src={neck4} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck5)}> <img src={neck5} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck6)}> <img src={neck6} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck7)}> <img src={neck7} alt="" /> </div>
            <div className="add" onClick={() => putNeck(neck8)}> <img src={neck8} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putBack(null)}>X</div>
            <div className="add" onClick={() => putBack(back1)}> <img src={back1} alt="" /> </div>
            <div className="add" onClick={() => putBack(back2)}> <img src={back2} alt="" /> </div>
            <div className="add" onClick={() => putBack(back3)}> <img src={back3} alt="" /> </div>
            <div className="add" onClick={() => putBack(back4)}> <img src={back4} alt="" /> </div>
            <div className="add" onClick={() => putBack(back5)}> <img src={back5} alt="" /> </div>
            <div className="add" onClick={() => putBack(back6)}> <img src={back6} alt="" /> </div>
            <div className="add" onClick={() => putBack(back7)}> <img src={back7} alt="" /> </div>
            <div className="add" onClick={() => putBack(back8)}> <img src={back8} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putSide(null)}>X</div>
            <div className="add" onClick={() => putSide(side1)}> <img src={side1} alt="" /> </div>
            <div className="add" onClick={() => putSide(side2)}> <img src={side2} alt="" /> </div>
            <div className="add" onClick={() => putSide(side3)}> <img src={side3} alt="" /> </div>
            <div className="add" onClick={() => putSide(side4)}> <img src={side4} alt="" /> </div>
            <div className="add" onClick={() => putSide(side5)}> <img src={side5} alt="" /> </div>
            <div className="add" onClick={() => putSide(side6)}> <img src={side6} alt="" /> </div>
            <div className="add" onClick={() => putSide(side7)}> <img src={side7} alt="" /> </div>
            <div className="add" onClick={() => putSide(side8)}> <img src={side8} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putFace(null)}>X</div>
            <div className="add" onClick={() => putFace(face1)}> <img src={face1} alt="" /> </div>
            <div className="add" onClick={() => putFace(face2)}> <img src={face2} alt="" /> </div>
            <div className="add" onClick={() => putFace(face3)}> <img src={face3} alt="" /> </div>
            <div className="add" onClick={() => putFace(face4)}> <img src={face4} alt="" /> </div>
            <div className="add" onClick={() => putFace(face5)}> <img src={face5} alt="" /> </div>
            <div className="add" onClick={() => putFace(face6)}> <img src={face6} alt="" /> </div>
            <div className="add" onClick={() => putFace(face7)}> <img src={face7} alt="" /> </div>
            <div className="add" onClick={() => putFace(face8)}> <img src={face8} alt="" /> </div>
          </div>
          <div className="dashboard">
            <div className="add x" onClick={() => putRealBut(null)}>X</div>
            <div className="add" onClick={() => putRealBut(realbut1)}> <img src={realbut1} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut2)}> <img src={realbut2} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut3)}> <img src={realbut3} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut4)}> <img src={realbut4} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut5)}> <img src={realbut5} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut6)}> <img src={realbut6} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut7)}> <img src={realbut7} alt="" /> </div>
            <div className="add" onClick={() => putRealBut(realbut8)}> <img src={realbut8} alt="" /> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
