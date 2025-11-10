import React, { useState, useEffect } from 'react';
import styles from './ProductSaleAdd.module.css';
import { ProductSaleAddTypes } from './ProductSaleAddTypes';

const ProductSaleAdd: React.FC = () => {
  // State variables for input fields
  const [tənzimIkonu, setTənzimIkonu] = useState('');
  const [ataAdı, setAtaAdı] = useState('');
  const [birləşənMiqdar, setBirləşənMiqdar] = useState('');
  const [təhvilTarixi, setTəhvilTarixi] = useState('');
  const [məhsul, setMəhsul] = useState('');
  const [əməliyyatNömrə, setƏməliyyatNömrə] = useState('');
  const [satışMəbləği, setSatışMəbləği] = useState('');
  const [əlavəMiqdar, setƏlavəMiqdar] = useState('');
  const [növ, setNöv] = useState('');
  const [satışMiqdarı, setSatışMiqdarı] = useState('');
  const [güzəştFaizi, setGüzəştFaizi] = useState('');
  const [əlaqəliƏsasVəsait, setƏlaqəliƏsasVəsait] = useState('');
  const [filial, setFilial] = useState('');
  const [məzmunSeçimi, setMəzmunSeçimi] = useState('');
  const [dəyiş, setDəyiş] = useState('');
  const [məbləğAZN, setMəbləğAZN] = useState('');
  const [layihəMeneceri, setLayihəMeneceri] = useState('');
  const [əlavəEt, setƏlavəEt] = useState('');
  const [soyad, setSoyad] = useState('');
  const [əlaqəNömrəsi1, setƏlaqəNömrəsi1] = useState('');
  const [ödənişNövü, setÖdənişNövü] = useState('');
  const [satışNövü, setSatışNövü] = useState('');
  const [mehsulKodu, setMehsulKodu] = useState('')
  const [yekunQiymət, setYekunQiymət] = useState('')
  const [faylƏlavəEt, setFaylƏlavəEt] = useState('')
  const [ədvMəbləğ, setƏdvMəbləğ] = useState('')
  const [vahid, setVahid] = useState('')
  const [prioritet, setPrioritet] = useState('')
  const [birləşənMəhsullar, setBirləşənMəhsullar] = useState('')
  const [sil, setSil] = useState('')
  const [anbar, setAnbar] = useState('')
  const [hıdden, setHıdden] = useState('')
  const [mühasib, setMühasib] = useState('')
  const [qiymətAZN, setQiymətAZN] = useState('')
  const [yekunMəbləğ, setYekunMəbləğ] = useState('')
  const [əlavəVahid, setƏlavəVahid] = useState('')
  const [əməliyyatTarixiSaatı, setƏməliyyatTarixiSaatı] = useState('')
  const [şirkət, setŞirkət] = useState('')
  const [əməliyyatStatus, setƏməliyyatStatus] = useState('')
  const [dərəcə, setDərəcə] = useState('')
  const [valyuta, setValyuta] = useState('')
  const [əsasMəbləğ, setƏsasMəbləğ] = useState('')
  const [kontragentƏtraflı, setKontragentƏtraflı] = useState('')
  const [silinənMiqdar, setSilinənMiqdar] = useState('')
  const [yeniMəzmun, setYeniMəzmun] = useState('')
  const [ceki, setCeki] = useState('')
  const [isChecked, setIsChecked] = useState('')
  const [əlaqəNömrəsi2, setƏlaqəNömrəsi2] = useState('')
  const [güzəştMəbləği, setGüzəştMəbləği] = useState('')
  const [açıqlama, setAçıqlama] = useState('')
  const [məhsulKodu2, setMəhsulKodu2] = useState('')
  const [altMəhsullar, setAltMəhsullar] = useState('')
  const [qeyd, setQeyd] = useState('')
  const [satışQiyməti, setSatışQiyməti] = useState('')
  const [əlavəVahid2, setƏlavəVahid2] = useState('')
  const [zəmanət, setZəmanət] = useState('')
  const [məbləğ2, setMəbləğ2] = useState('')
  const [daxilEdən, setDaxilEdən] = useState('')
  const [qalıqMiqdar, setQalıqMiqdar] = useState('')

  // Event handlers for input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'tənzimIkonu': setTənzimIkonu(value); break;
      case 'ataAdı': setAtaAdı(value); break;
      case 'birləşənMiqdar': setBirləşənMiqdar(value); break;
      case 'təhvilTarixi': setTəhvilTarixi(value); break;
      case 'məhsul': setMəhsul(value); break;
      case 'əməliyyatNömrə': setƏməliyyatNömrə(value); break;
      case 'satışMəbləği': setSatışMəbləği(value); break;
      case 'əlavəMiqdar': setƏlavəMiqdar(value); break;
      case 'növ': setNöv(value); break;
      case 'satışMiqdarı': setSatışMiqdarı(value); break;
      case 'güzəştFaizi': setGüzəştFaizi(value); break;
      case 'əlaqəliƏsasVəsait': setƏlaqəliƏsasVəsait(value); break;
      case 'filial': setFilial(value); break;
      case 'məzmunSeçimi': setMəzmunSeçimi(value); break;
      case 'dəyiş': setDəyiş(value); break;
      case 'məbləğAZN': setMəbləğAZN(value); break;
      case 'layihəMeneceri': setLayihəMeneceri(value); break;
      case 'əlavəEt': setƏlavəEt(value); break;
      case 'soyad': setSoyad(value); break;
      case 'əlaqəNömrəsi1': setƏlaqəNömrəsi1(value); break;
      case 'ödənişNövü': setÖdənişNövü(value); break;
      case 'satışNövü': setSatışNövü(value); break;
      case 'mehsulKodu': setMehsulKodu(value); break;
      case 'yekunQiymət': setYekunQiymət(value); break;
      case 'faylƏlavəEt': setFaylƏlavəEt(value); break;
      case 'ədvMəbləğ': setƏdvMəbləğ(value); break;
      case 'vahid': setVahid(value); break;
      case 'prioritet': setPrioritet(value); break;
      case 'birləşənMəhsullar': setBirləşənMəhsullar(value); break;
      case 'sil': setSil(value); break;
      case 'anbar': setAnbar(value); break;
      case 'hıdden': setHıdden(value); break;
      case 'mühasib': setMühasib(value); break;
      case 'qiymətAZN': setQiymətAZN(value); break;
      case 'yekunMəbləğ': setYekunMəbləğ(value); break;
      case 'əlavəVahid': setƏlavəVahid(value); break;
      case 'əməliyyatTarixiSaatı': setƏməliyyatTarixiSaatı(value); break;
      case 'şirkət': setŞirkət(value); break;
      case 'əməliyyatStatus': setƏməliyyatStatus(value); break;
      case 'dərəcə': setDərəcə(value); break;
      case 'valyuta': setValyuta(value); break;
      case 'əsasMəbləğ': setƏsasMəbləğ(value); break;
      case 'kontragentƏtraflı': setKontragentƏtraflı(value); break;
      case 'silinənMiqdar': setSilinənMiqdar(value); break;
      case 'yeniMəzmun': setYeniMəzmun(value); break;
      case 'ceki': setCeki(value); break;
      case 'isChecked': setIsChecked(value); break;
      case 'əlaqəNömrəsi2': setƏlaqəNömrəsi2(value); break;
      case 'güzəştMəbləği': setGüzəştMəbləği(value); break;
      case 'açıqlama': setAçıqlama(value); break;
      case 'məhsulKodu2': setMəhsulKodu2(value); break;
      case 'altMəhsullar': setAltMəhsullar(value); break;
      case 'qeyd': setQeyd(value); break;
      case 'satışQiyməti': setSatışQiyməti(value); break;
      case 'əlavəVahid2': setƏlavəVahid2(value); break;
      case 'zəmanət': setZəmanət(value); break;
      case 'daxilEdən': setDaxilEdən(value); break;
      case 'qalıqMiqdar': setQalıqMiqdar(value); break;
      default: break;
    }
  };

  return (
    <div className={styles.productSaleAdd}>
      {/* Form inputs will be generated here based on the UI Canvas JSON */}
      <label>Soyad</label>
      <input
        type="text"
        name="soyad"
        value={soyad}
        onChange={handleInputChange}
      />
      <label>Ata adı</label>
      <input
        type="text"
        name="ataAdı"
        value={ataAdı}
        onChange={handleInputChange}
      />
       <label>Əlaqə nömrəsi 1</label>
      <input
        type="text"
        name="əlaqəNömrəsi1"
        value={əlaqəNömrəsi1}
        onChange={handleInputChange}
      />
       <label>Əlaqə nömrəsi 2</label>
      <input
        type="text"
        name="əlaqəNömrəsi2"
        value={əlaqəNömrəsi2}
        onChange={handleInputChange}
      />
       <label>Email</label>
      <input
        type="text"
        name="email"
        value={əlaqəNömrəsi2}
        onChange={handleInputChange}
      />

      {/* Add other input fields here */}
      <button>Yadda saxla</button>
    </div>
  );
};

export default ProductSaleAdd;
