import { Divider } from "@mui/material";
import React from "react";

const Options = () => {
  return (
    <div className="absolute top-0 left-0 sm:left-auto sm:right-auto w-[80%] h-full flex flex-col overflow-y-auto no-scrollbar pb-40">
      <h1 className="text-[20px] font-medium">Temel Öğeler</h1>
      <span className="text-sm mt-6">E-posta</span>
      <div className="w-full flex flex-row h-8 items-center justify-between mt-2 gap-3">
        <input
          type="text"
          disabled
          value="mertademgulenc@gmail.com"
          className="h-full border border-gray-300 text-sm opacity-50 rounded py-[6px] px-3 w-full shadow-sm"
        />
        <button className="h-full py-1 px-[14px] text-sm border border-[#6941c6] text-[#6941c6] rounded shadow-sm hover:bg-purple-50">
          Düzenle
        </button>
      </div>
      <div className="flex flex-col mt-3 h-8 gap-3 ">
        <input
          type="text"
          placeholder="E-postanız"
          className="h-full border border-gray-300 text-sm  rounded py-[6px] px-3 w-full shadow-sm"
        />

        <button className="h-full w-max py-1 px-[14px] text-sm border bg-[#6941c6] text-white rounded shadow-sm hover:opacity-75">
          Ekle
        </button>
      </div>
      <span className="text-sm mt-16">Şifre</span>
      <div className="flex flex-row  items-center mt-5">
        <span className="text-[15px] text-gray-600 w-24">Mevcut</span>
        <input
          type="password"
          className="h-full border border-gray-300 text-sm  rounded py-[6px] px-3 w-full shadow-sm"
        />
      </div>
      <div className="flex flex-row  items-center mt-5">
        <span className="text-[15px] text-gray-600 w-24">Yeni</span>
        <input
          type="password"
          className="h-full border border-gray-300 text-sm  rounded py-[6px] px-3 w-full shadow-sm"
        />
      </div>
      <button className="h-8 mt-4 w-max py-1 px-[14px] text-sm border bg-[#6941c6] text-white rounded shadow-sm hover:opacity-75">
        Kaydet
      </button>
      <span className="text-sm mt-6">Dil</span>
      <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
        <option selected value="Türkçe">
          Türkçe
        </option>
      </select>
      <span className="text-sm mt-6">Tarih ve saat</span>
      <div className="flex flex-row items-center mt-4">
        <span className="text-sm text-gray-600 w-44">Haftanın ilk günü</span>
        <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
          <option selected>Pazartesi</option>
          <option>Salı</option>
          <option>Çarşamba</option>
          <option>Perşembe</option>
          <option>Cuma</option>
          <option>Cumartesi</option>
          <option>Pazar</option>
        </select>
      </div>
      <div className="flex flex-row items-center mt-2">
        <span className="text-sm text-gray-600 w-44">Haftasonu</span>
        <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
          <option selected>Cumartesi, Pazar</option>
          <option>Cuma, Cumartesi</option>
          <option>Pazar, Pazartesi</option>
          <option>Pazar</option>
          <option>Cuma</option>
          <option>Cuma, Cumartesi</option>
        </select>
      </div>
      <Divider sx={{ marginTop: "50px", bgcolor: "#00000030" }} />
      <h1 className="text-[20px] font-medium mt-8">Hatırlatmalar</h1>
      <span className="text-sm mt-8">Yaklaşan Görevleri Hatırlat</span>
      <div className="flex flex-row items-center gap-3">
        <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
          <option>Hiçbiri</option>
          <option>12 saat önce</option>
          <option selected>1 gün önce</option>
          <option>2 gün önce</option>
          <option>3 gün önce</option>
          <option>Günün başında</option>
          <option>Haftanın başında</option>
        </select>
        <span className="text-sm text-gray-900 translate-y-1">saat</span>
        <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
          <option>00:00</option>
          <option>01:00</option>
          <option>02:00</option>
          <option>03:00</option>
          <option>04:00</option>
          <option>05:00</option>
          <option>06:00</option>
          <option>07:00</option>
          <option selected>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
        </select>
      </div>
      <span className="text-sm mt-8">
        Yaklaşan Görevleri Zamanla Birlikte Hatırlat
      </span>
      <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
        <option>Hiçbiri</option>
        <option>Zamanında</option>
        <option>15 dk. önce</option>
        <option selected>30 dk. önce</option>
        <option>1 saat önce</option>
        <option>2 saat önce</option>
      </select>
      <span className="text-sm mt-8">Geciken Görevleri Hatırlat</span>
      <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
        <option>Hiçbiri</option>
        <option>Ertesi gün</option>
        <option>2 gün sonra</option>
        <option selected>Gelecek haftanın başında</option>
      </select>
      <Divider sx={{ marginTop: "50px", bgcolor: "#00000030" }} />
      <h1 className="text-[20px] font-medium mt-8">E-posta bildirimleri</h1>
      <span className="text-sm mt-8">Etkinlik Bildirimi Gönder</span>
      <select className="h-8 border border-gray-300 text-sm mt-3 rounded py-[6px] px-3 w-full shadow-sm">
        <option>Hiçbiri</option>
        <option>Göncelleme başında</option>
        <option>Saatlik</option>
        <option selected>Günlük</option>
        <option>Haftalık</option>
      </select>
      <Divider sx={{ marginTop: "50px", bgcolor: "#00000030" }} />
      <h1 className="text-[20px] font-medium mt-8">
        upu.task'a e-posta gönder
      </h1>
      <label className="text-sm mt-6 flex gap-2">
        <input type="checkbox" />
        E-postalardan Görevler Oluşturun
      </label>
      <Divider sx={{ marginTop: "50px", bgcolor: "#00000030" }} />
      <h1 className="text-[20px] font-medium mt-8">Proje Tercihleri</h1>
      <label className="text-sm mt-6 flex gap-2">
        <input type="checkbox" />
        Ayrıntı panelini varsayılan olarak sabitle
      </label>
      <label className="text-sm mt-3 flex gap-2">
        <input type="checkbox" />
        Varsayılan olarak tüm alt görevleri daralt
      </label>
      <label className="text-sm mt-3 flex gap-2">
        <input type="checkbox" />
        Yeni görevleri otomatik olarak bana ata
      </label>
      <label className="text-sm mt-3 flex gap-2">
        <input type="checkbox" />
        Tamamlanmış görevlerin üstünü çiz
      </label>
      <Divider sx={{ marginTop: "50px", bgcolor: "#00000030" }} />
      <h1 className="text-[20px] font-medium mt-8">İleri</h1>
      <span className="text-sm text-red-600 hover:underline cursor-pointer mt-6">Hesabı sil...</span>
    </div>
  );
};

export default Options;
