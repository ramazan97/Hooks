import React from "react";

const TemplateLiterals = () => {
  // ## Template Literals (şablon dizileri)
  // 💡 Bir Javascript ifadesini düz bir yazı yazar gibi tek bir satırda yazmamızı sağlayan string çeşidi olarak tanımlanabilir. Template literals, back tick dediğimiz tırnak işaretleri içinde yazılmalıdır (Tab'ın üzerindeki, ESC'nin altındaki düğme.)
  // ```javascript
  const isim = "Mehmet";
  const mesaj = `Merhaba, ${isim}`;
  console.log(mesaj); // Merhaba, Mehmet
  // 💡 Başka bir örnek:
  // ```javascript
  const birim_fiyat = 100;
  const adet = 3;
  const para_birimi = "TL";
  const toplam_tutar = `Toplam: ${birim_fiyat * adet} ${para_birimi}`; // Toplam: 300 TL

  return (
    <div className="container">
      <h1>isim : {isim} </h1>
      <h1>mesaj : {mesaj} </h1>
      <h1>birim_fiyat : {birim_fiyat} </h1>
      <h1>adet : {adet} </h1>
      <h1>para_birimi : {para_birimi} </h1>
      <h1>toplam_tutar : {toplam_tutar} </h1>
    </div>
  );
};

export default TemplateLiterals;

// // ## Template Literals (şablon dizileri)

// // 💡 Bir Javascript ifadesini düz bir yazı yazar gibi tek bir satırda yazmamızı sağlayan string çeşidi olarak tanımlanabilir. Template literals, back tick dediğimiz tırnak işaretleri içinde yazılmalıdır (Tab'ın üzerindeki, ESC'nin altındaki düğme.)

// // ```javascript
// const isim = "Mehmet";
// const mesaj = `Merhaba, ${isim}`;
// console.log(mesaj); // Merhaba, Mehmet

// // 💡 Başka bir örnek:

// // ```javascript
// const birim_fiyat = 100;
// const adet = 3;
// const para_birimi = "TL";

// const toplam_tutar = `Toplam: ${birim_fiyat * adet} ${para_birimi}`; // Toplam: 300 TL
