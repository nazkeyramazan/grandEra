import './table.css';
import React, {useState, useEffect} from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import moreInfo from './templates/moreInfo';
import deleteUser from './templates/deleteUser';
import {Context} from './context';
function Table() {
  const [items, setItems] = useState([]);
  const pageSettings = { pageSize: 5 };
  const sortSettings = { column: 
    {field: 'name', direction: 'none' }
  };
  const selectionSettings = { checkboxMode: 'ResetOnRowClick'};
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])

  return (
    <Context.Provider value={[items, setItems]}>
      <div className="table">
        <GridComponent 
          dataSource={items}
          allowPaging={true} 
          pageSettings={pageSettings}
          allowSorting={true}
          sortSettings={sortSettings}
          selectionSettings={selectionSettings}
          >
            <ColumnsDirective>
                <ColumnDirective type='checkbox' width='50' textAlign='Left'/>
                <ColumnDirective field='id' headerText='ID' textAlign='Left' width='100'/>
                <ColumnDirective headerText='Подробнее' template={moreInfo} textAlign='Left' width='100'/>
                <ColumnDirective field='name' headerText='Имя' textAlign='Left' width='100'/>
                <ColumnDirective field='email' headerText='Почта' textAlign='Left' width='100' format="C2"/>
                <ColumnDirective field='website' headerText='Веб-сайт' textAlign='Left' width='100'/>
                <ColumnDirective headerText='Удалить' template={deleteUser} textAlign='Left' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort]} />
        </GridComponent>
      </div>
      </Context.Provider>
  );
}

export default Table;
