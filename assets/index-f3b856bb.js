import{F as e,bb as t,b as a,r,j as i,bf as o,bg as n,bh as d,bi as l,bj as s}from"./.pnpm-05c560be.js";import{C as c}from"./index-1b9e75ba.js";import{T as f,c as g,s as p}from"./index-46220b14.js";import m from"./calendar-event-384e5e8f.js";import u from"./calendar-event-form-45cd4213.js";import h from"./calendar-header-16109b76.js";const b=[{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().toISOString(),end:t().add(10,"hour").toISOString(),color:"#7a0916"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(1,"day").toISOString(),end:t().add(3,"day").toISOString(),allDay:e.datatype.boolean(),color:"#00b8d9"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(3,"day").toISOString(),end:t().add(5,"day").toISOString(),allDay:e.datatype.boolean(),color:"#ff5630"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(7,"day").toISOString(),end:t().add(8,"day").toISOString(),allDay:e.datatype.boolean(),color:"#ffab00"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(7,"day").toISOString(),end:t().add(8,"day").toISOString(),allDay:e.datatype.boolean(),color:"#ffab00"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(8,"day").toISOString(),end:t().add(9,"day").toISOString(),allDay:e.datatype.boolean(),color:"#8e33ff"},{id:e.string.uuid(),title:e.lorem.words({min:2,max:5}),start:t().add(10,"day").toISOString(),end:t().add(11,"day").toISOString(),color:"#00a76f"}],y=a.div`
  width: 100%;
  height: 100%;
  .fc {
    width: 100%;
    height: 100%;
    /* override fullcalendar css variables */
    --fc-border-color: rgba(145, 158, 171, 0.16);
    --fc-now-indicator-color: #ff5630;
    --fc-today-bg-color: rgba(145, 158, 171, 0.08);
    --fc-page-bg-color: ${e=>e.$themeMode===f.Light?"#ffffff":"#161c24"};
    --fc-neutral-bg-color: ${e=>e.$themeMode===f.Light?"#F4F6F8":"rgba(145, 158, 171, 0.12)"};
    --fc-list-event-hover-bg-color: rgba(145, 158, 171, 0.08);
    --fc-highlight-color: rgba(145, 158, 171, 0.08);

    a {
      color: ${e=>e.$themeMode===f.Dark?"#ffffff":"#212b36"};
    }
    .fc-col-header {
      box-shadow: rgba(145, 158, 171, 0.2) 0px -1px 0px inset;
      th {
        border-color: transparent;
      }
      .fc-col-header-cell-cushion {
        font-weight: 600;
        font-size: 0.875rem;
        font-family: 'Public Sans', sans-serif;
        padding: 8px 0px;
      }
    }

    /* view Month Week Day */
    .fc-dayGridMonth-view,
    .fc-timeGridWeek-view,
    .fc-timeGridDay-view {
      .fc-daygrid-day-number {
        line-height: 1.57143;
        font-size: 0.875rem;
        font-family: 'Public Sans', sans-serif;
        font-weight: 400;
        padding: 8px 8px 0px;
      }
      .fc-daygrid-event {
        margin-top: 4px;
        .fc-event-start,
        .fc-event-end {
          margin-left: 4px;
          margin-right: 4px;
        }
      }
      .fc-event {
        border-color: transparent !important;
        background-color: transparent !important;

        .fc-event-main-wrapper {
          border-radius: 6px;
          width: 100%;
          background-color: #fff;
          &::before {
            top: 0px;
            left: 0px;
            width: 100%;
            content: '';
            opacity: 0.24;
            height: 100%;
            border-radius: 6px;
            position: absolute;
            background-color: currentcolor;
            transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }
          .fc-event-main-frame {
            font-size: 13px;
            line-height: 20px;
            filter: brightness(0.48);
            display: flex;
            width: 100%;
            .fc-event-time {
              overflow: unset;
              font-weight: 700;
            }
            .fc-event-title-container {
              flex-grow: 1;
              flex-shrink: 1;
              min-width: 0px;
              .fc-event-title {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }

    /* view list */
    .fc-list {
      .fc-list-day {
        th {
          z-index: 100;
        }
      }
      .fc-list-day-text,
      .fc-list-day-side-text {
        line-height: 1.57143;
        font-size: 0.875rem;
        font-family: 'Public Sans', sans-serif;
        font-weight: 400;
      }

      .fc-list-event-time {
        color: ${e=>e.$themeMode===f.Light?"rgb(99, 115, 129)":"rgb(145, 158, 171)"};
      }
      .fc-event-title {
        color: ${e=>e.$themeMode===f.Dark?"rgb(255, 255, 255)":"rgb(33, 43, 54)"};
      }
      .fc-list-table {
        th,
        td {
          border-color: transparent;
        }
      }

      .fc-event-main-frame {
        background-color: transparent;
      }
    }
  }
`,x={id:e.string.uuid(),title:"",description:"",allDay:!1,start:t(),end:t(),color:""};function v(){const a=r.useRef(null),[f,v]=r.useState("dayGridMonth"),[w,S]=r.useState(new Date),[D,I]=r.useState(!1),[k,j]=r.useState(x),[M,O]=r.useState("add"),{themeMode:$}=g(),{screenMap:C}=p();r.useEffect((()=>{C.xs&&v("listWeek")}),[C]);r.useLayoutEffect((()=>{const e=a.current.getApi();setTimeout((()=>{e.changeView(f)}))}),[f]);return i.jsxs(c,{className:"h-full w-full",children:[i.jsx("div",{className:"h-full w-full",children:i.jsxs(y,{$themeMode:$,children:[i.jsx(h,{now:w,view:f,onMove:e=>{const t=a.current.getApi();switch(e){case"prev":t.prev();break;case"next":t.next();break;case"today":t.today()}S(t.getDate())},onCreate:()=>I(!0),onViewTypeChange:e=>{v(e)}}),i.jsx(o,{ref:a,plugins:[n,d,l,s],initialDate:w,initialView:C.xs?"listWeek":f,events:b,eventContent:m,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,headerToolbar:!1,select:a=>{a.view.calendar.unselect(),I(!0),O("add"),j({id:e.string.uuid(),title:"",description:"",start:t(a.startStr),end:t(a.endStr),allDay:a.allDay})},eventClick:e=>{const{title:a,extendedProps:r,allDay:i,start:o,end:n,backgroundColor:d,id:l}=e.event;I(!0),O("edit");const s={id:l,title:a,allDay:i,color:d,description:r.description};o&&(s.start=t(o)),n&&(s.end=t(n)),j(s)}})]})}),i.jsx(u,{open:D,type:M,initValues:k,onCancel:()=>{j(x),I(!1)},onDelete:e=>{const t=a.current.getApi().getEventById(e);t?.remove()},onCreate:t=>{const r=a.current.getApi(),{title:i="",description:o,start:n,end:d,allDay:l=!1,color:s}=t,c={id:e.string.uuid(),title:i,allDay:l,color:s,extendedProps:{description:o}};n&&(c.start=n.toDate()),d&&(c.end=d.toDate()),r.addEvent(c)},onEdit:e=>{const{id:t,title:r="",description:i,start:o,end:n,allDay:d=!1,color:l}=e,s=a.current.getApi(),c=s.getEventById(t),f={id:t,title:r,allDay:d,color:l,extendedProps:{description:i}};o&&(f.start=o.toDate()),n&&(f.end=n.toDate()),c?.remove(),s.addEvent(f)}})]})}export{v as default};
