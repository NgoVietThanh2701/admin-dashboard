import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
   return (
      <div className='m-2 p-2 md:m-8 md:p-4 bg-white rounded-2xl'>
         <Header category="Page" title="Employees" />
         <GridComponent
            dataSource={employeesData}
            allowPaging
            allowSorting
            toolbar={['Search']}
            width='auto'
         >
            <ColumnsDirective>
               {employeesGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
               ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
         </GridComponent>
      </div>
   )
}

export default Employees