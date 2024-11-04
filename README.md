<h1 align="center">MTC Evolution</h1>
<h4 align="center">Offcial Moldtelecom Brand Guide and toolkit repository</h4>

<p align=center>                           
  <img align="center" style="height: 30%; width: 30%;" src="images/directmail/v1/moldtelecom_small_logo_1.png" />
</p> 
<br>
<h2>Demo/Testing:</h2>

This repository is used for developing and storing Moldtelecom landings pages, directmails, and other public shared products.<br>
Main showcase demo - [link](https://cristianbrinza.github.io/evolution/).
### Landings:
- [MD-IX](https://cristianbrinza.github.io/evolution/demo/landings/mdix.html) | [RU](https://cristianbrinza.github.io/evolution/demo/landings/mdix_ru.html)
- [Home](https://cristianbrinza.github.io/evolution/demo/landings/home.html)
- [Moldtelecom TV](https://cristianbrinza.github.io/evolution/demo/landings/moldtelecom-tv.html)
- [Despre Companie](https://cristianbrinza.github.io/evolution/demo/landings/despre-companie.html)
- [Cinema Online](https://cristianbrinza.github.io/evolution/demo/landings/cinema-online.html)
- [Echipamente WiFi](https://cristianbrinza.github.io/evolution/demo/landings/echipamente-wifi.html)
- [Safe-Web](https://cristianbrinza.github.io/evolution/demo/landings/safe-web.html)
- [News](https://cristianbrinza.github.io/evolution/demo/landings/news.html)

### Promo:
- [Triple](https://cristianbrinza.github.io/evolution/demo/landings/triple.html)
- [Mobile](https://cristianbrinza.github.io/evolution/demo/landings/tm.html)

### Others:
- [Factura](https://cristianbrinza.github.io/evolution/demo/landings/factura.html)
- [Digital 10](https://cristianbrinza.github.io/evolution/demo/landings/digital10.html)


### Directmail:

|name|ro|ru|en|
|----|----|----|----|
|e-SIM qr|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_qr_ro.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_qr_ru.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_qr_en.html)
|e-SIM code|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_code_ro.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_code_ru.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_code_en.html)
|e-SIM pay|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_pay_ro.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_pay_ru.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_pay_en.html)
|e-SIM thx|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_thx_ro.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_thx_ru.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/esim_thx_en.html)
|One Number|[■](https://cristianbrinza.github.io/evolution/demo/directmail/one_number_qr_ro.html)|[■](https://cristianbrinza.github.io/evolution/demo/directmail/one_number_qr_ru.html)| [■](https://cristianbrinza.github.io/evolution/demo/directmail/one_number_qr_en.html)|

<br>
<h2>Assets:</h2>
Below are presented the style and logic to the Evolution Design System Toolkit Web developement:

- [JS](toolkit/js/mtc_evolution.js)
- [CSS](toolkit/css/mtc_evolution.css)
- HTML : [Footer](toolkit/html/mtc_evolution_footer.html)
- Test [test.html](demo/landings/test.html), [test.js](toolkit/test/test.js).
- [Fonts](toolkit/fonts)


<br>
<h2>Spripts:</h2>
Directmail to production:

```python
python3 scripts/directmail_to_production.py demo/directmail/one_number_qr_ro.html
```

Langing to production:

```python
python3 scripts/landing_to_production.py demo/landings/home.html
```


Toolkit to production:

```python
python3 scripts/toolkit_to_production.py toolkit/js/mtc_evolution.js
python3 scripts/toolkit_to_production.py toolkit/css/mtc_evolution.css
```