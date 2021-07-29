export const AdminPageScriptsRun = (run) => {
    const head = document.getElementsByTagName('head')[0]
    const link1 = document.createElement('link')
    const link2 = document.createElement('link')
    const link3 = document.createElement('link')
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')
    const script4 = document.createElement('script')
    const script5 = document.createElement('script')
    const script6 = document.createElement('script')

    if (run === true) {
        script1.async = true
        script2.async = true
        script3.async = true
        script4.async = true
        script5.async = true
        script6.async = true

        link1.href = "admin/assets/css/app-modern.min.css"
        link1.rel = "stylesheet"
        link1.type = "text/css"
        link2.href = "admin/assets/css/vendor/jquery-jvectormap-1.2.2.css"
        link2.rel = "stylesheet"
        link2.type = "text/css"
        link3.href = "admin/assets/css/icons.min.css"
        link3.rel = "stylesheet"
        link3.type = "text/css"
        script1.src = "admin/assets/js/vendor.min.js"
        script2.src = "admin/assets/js/app.min.js"
        script3.src = "admin/assets/js/vendor/apexcharts.min.js"
        script4.src = "admin/assets/js/vendor/jquery-jvectormap-1.2.2.min.js"
        script5.src = "admin/assets/js/vendor/jquery-jvectormap-world-mill-en.js"
        script6.src = "admin/assets/js/pages/demo.dashboard.js"
        head.appendChild(script1)
        head.appendChild(script2)
        head.appendChild(script3)
        head.appendChild(script4)
        head.appendChild(script5)
        head.appendChild(script6)
        head.appendChild(link1)
        head.appendChild(link2)
        head.appendChild(link3)
    } else {
        head.querySelectorAll('link').forEach((itm) => {
            if (itm.href === `${window.location.href}admin/assets/css/app-modern.min.css`) {
                itm.href = "ki"
            }
        })
    }

}

// export const styleScript = () => {
//     const head1 = document.getElementsByTagName('head')

// }