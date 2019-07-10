import React from 'react';

import TasksTable from './TasksTable';
import EmployeesTable from './EmployeesTable';

class Tables extends React.Component {
    render(){
        return(
            <div className="row">
            <TasksTable />
            <EmployeesTable />
          </div>
        )
    }
}

export default Tables;