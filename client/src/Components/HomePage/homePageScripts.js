export const runScripts = () => {
  const head = document.getElementsByTagName('head')[0];
  const script1 = document.createElement('script');
  const script2 = document.createElement('script');
  const script3 = document.createElement('script');
  const script4 = document.createElement('script');
  const script5 = document.createElement('script');
  const script6 = document.createElement('script');
  const script7 = document.createElement('script');
  const script8 = document.createElement('script');
  const script9 = document.createElement('script');
  const script10 = document.createElement('script');
  const script11 = document.createElement('script');
  const script12 = document.createElement('script');
  const script13 = document.createElement('script');
  const script14 = document.createElement('script');
  const script15 = document.createElement('script');
  const script16 = document.createElement('script');
  const script17 = document.createElement('script');
  const script18 = document.createElement('script');
  const script19 = document.createElement('script');
  script1.async = true;
  script2.async = true;
  script3.async = true;
  script4.async = true;
  script5.async = true;
  script6.async = true;
  script7.async = true;
  script8.async = true;
  script9.async = true;
  script10.async = true;
  script11.async = true;
  script12.async = true;
  script13.async = true;
  script14.async = true;
  script15.async = true;
  script16.async = true;
  script17.async = true;
  script18.async = true;
  script19.async = true;
  script1.src = 'vendor/jquery/dist/jquery.min.js';
  // script2.src = 'vendor/popper.js/dist/umd/popper.min.js';
  script3.src = 'vendor/bootstrap/dist/js/bootstrap.min.js';
  script4.src = 'vendor/headroom.js/dist/headroom.min.js';
  script5.src = 'vendor/onscreen/dist/on-screen.umd.min.js';
  script6.src = 'vendor/nouislider/distribute/nouislider.min.js';
  // script7.src = 'vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
  script8.src = 'vendor/waypoints/lib/jquery.waypoints.min.js';
  script9.src = 'vendor/owl.carousel/dist/owl.carousel.min.js';
  script10.src = 'vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js';
  script11.src = 'vendor/%40fancyapps/fancybox/dist/jquery.fancybox.min.js';
  script12.src = 'vendor/sticky-sidebar/dist/sticky-sidebar.min.js';
  script13.src = 'vendor/leaflet/dist/leaflet.js';
  script14.src = 'vendor/chartist/dist/chartist.min.js';
  script15.src = 'vendor/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js';
  script16.src = 'vendor/jqvmap/dist/jquery.vmap.min.js';
  script17.src = 'vendor/jqvmap/dist/maps/jquery.vmap.usa.js';
  script18.src = 'assets/js/jquery.slideform.js';
  script19.src = 'assets/js/spaces.js';
  head.appendChild(script1);
  head.appendChild(script2);
  head.appendChild(script3);
  head.appendChild(script4);
  head.appendChild(script5);
  head.appendChild(script6);
  head.appendChild(script7);
  head.appendChild(script8);
  head.appendChild(script9);
  head.appendChild(script10);
  head.appendChild(script11);
  head.appendChild(script12);
  head.appendChild(script13);
  head.appendChild(script14);
  head.appendChild(script15);
  head.appendChild(script16);
  head.appendChild(script17);
  head.appendChild(script18);
  head.appendChild(script19);
};

export const calendarScripts = () => {

 let dataLayer= window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-141734189-6');

      (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');

      const head = document.getElementsByTagName('head')[0];
      const script1 = document.createElement('script');
      script1.src = 'vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
      head.appendChild(script1);
      // runScripts()
};
