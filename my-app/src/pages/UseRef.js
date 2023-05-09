import React, { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
    textRef.current.focus();
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
    textRef.current.focus();
  };

  const handleHeaderClick = (level) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const header = document.createElement(`h${level}`);
    header.appendChild(range.extractContents());
    range.insertNode(header);
    textRef.current.focus();
  };

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <button onClick={handleItalicClick}>Italic</button>
      <button onClick={() => handleHeaderClick(1)}>H1</button>
      <button onClick={() => handleHeaderClick(2)}>H2</button>
      <button onClick={() => handleHeaderClick(3)}>H3</button>
      <button onClick={() => handleHeaderClick(4)}>H4</button>
      <button onClick={() => handleHeaderClick(5)}>H5</button>
      <button onClick={() => handleHeaderClick(6)}>H6</button>
      <div
        contentEditable={true}
        ref={textRef}
        onInput={(e) => setText(e.target.innerHTML)}
      >
        Dilimizde “Sevgililer Günü” olarak anılıyor olsa da dünya çapında
        kutlanan bu özel günün İngilizce orijinal adı “Saint Valentine’s Day”
        yani “Aziz Valentin Günü”dür. Dünya çapında romantik bir kutlama sebebi
        olan bu gün aynı zamanda Hrıstiyan inancında aziz olarak kabul edilen
        bir din adamıyla da ilgilidir. Bunun sebebi de Aziz Valentin adlı bu din
        adamının 1400’lü yıllarda birbirine aşık Romalı bir çiftin evlenmesine
        yardımcı olması ve deyim yerindeyse sevenleri kavuşturmasıdır. Üstelik
        bunu yaparken imparatorun emirlerini göz ardı etmiş ve ölümü göze
        almıştır. O dönem despotluğun ve baskıcılığın sembolü olan kilise
        aleminde aşkı da kutsal olarak değerlendirip böylesine bir baş kaldırı
        yapmış olması da devam eden nesillerde kıymet görmüş ve “Sevgililer
        Günü” olarak da kutlanmaya başlamıştır. Ancak Sevgililer Günü’nün
        kutlandığı 14 Şubat’ın Aziz Valentin ile bir alakası

        {/* {text} */}
      </div>
    </div>
  );
}

export default App;
