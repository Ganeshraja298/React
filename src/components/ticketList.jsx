import React from 'react'
import './../sass/ticketList.scss'

export default function ticketList () {
    const data = {
        title : 'Ticket List',
        button_name: 'New Ticket',
        tickets : [
            { 
                subject:'questions',
                ticket_no:'123',
                priority:'High',
                requested:'Jan26',
                assigned:'John'
            },
            { 
                subject:'questions',
                ticket_no:'123',
                priority:'High',
                requested:'Jan26',
                assigned:'John'
            },
            { 
                subject:'questions',
                ticket_no:'123',
                priority:'High',
                requested:'Jan26',
                assigned:'John'
            },
            { 
                subject:'questions',
                ticket_no:'123',
                priority:'High',
                requested:'Jan26',
                assigned:'John'
            }
        ]
    }
    let headings = Object.keys(data.tickets[0]);

    return(
        <>
        <div className='container'>
        <div className='ticket_container'>
          <div className='d_flex just-s'>
              <h6 className='title'>{data.title}</h6>
              <button className='primary_button add_button'>{data.button_name}</button>
          </div>
          <div className='table_headng' style={{gridTemplateColumns:`3fr repeat(${headings.length-1},1fr)`}}>
              {headings && headings.map(head=>{
                return(
                    <p className='head'>{head}</p>
                )
              })
              }
          </div>
          {data.tickets.map(ticket=>{
            return(
                <div className='table_row' style={{gridTemplateColumns:`3fr repeat(${headings.length-1},1fr)`}}>{headings.map(head=>{
                    return (
                        <p className='t_data'>
                        {ticket[head]}
                    </p>)
                })}</div>
            )
          })}
        </div>
        </div>
        </>
    )
}