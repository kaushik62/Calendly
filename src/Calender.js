import React from "react";

function GoogleCalendar() {
    return (
        <div>

            <iframe
                className="rounded-[20px] "
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=c3VrbGEuYmFydWlwdXIyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA5MTEyNTIzNTUyMDcxMzk0NzAxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043&color=%23202124"
                width="500"
                height="450"
                frameborder="0"
                scrolling="no"
            ></iframe>
        </div>
    );
}

export default GoogleCalendar;
