import React from 'react';
import { Avatar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import './ProjectsTable.css';

let theme = (headerColor, color) =>
    createMuiTheme({
        overrides: {
            MUIDataTableHeadCell: {
                fixedHeader: {
                    backgroundColor: headerColor
                }
            },
            MuiButton: {
                label: {
                    color : color
                }
            },
            MUIDataTableToolbar: {
                root: {
                    backgroundColor: headerColor,
                    color: color,
                },
                left: { flex: 'none' }
            },
        },
    });

const ProjectsTable = props => {

    const { data , color, headerColor } = props;

    const columns = [
        { name: "id" , label : 'Id' },
        { name: "name" , label : 'Name' },
        {
            name: "score",
            label : 'Score',
            options: {
                customBodyRender: value => {
                    if (value > 90) 
                        return <Avatar style = {{ fontSize : '14px',backgroundColor: 'green'}}>{value}</Avatar>
                    if (value<70)
                        return <Avatar style = {{ fontSize : '14px',backgroundColor: 'red'}}>{value}</Avatar>
                    else 
                        return <Avatar style = {{ fontSize : '14px',backgroundColor: '#2b2b2b' }}>{value}</Avatar>
                }
            }
        },
        {
            name: "durationInDays", label : 'Duartion in days'
        },
        {
            name: "bugsCount" ,
            label : 'Bugs count'
        },
        {
            name: "madeDadeline",
            label: "Made Deadline"
        }
    ]

    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRows: 'none',
        responsive: 'vertical',
        tableBodyHeight: '400px',
    };

    const rowsData = () => {
        return data.map((element) => {
            const { id, name, score, durationInDays, bugsCount, madeDadeline } = element;
            return [id, name, score, durationInDays, bugsCount, madeDadeline.toString()]
        });
    }


    return (
        <div className="tableContainer">
            <React.Fragment>
                <MuiThemeProvider theme={theme(headerColor, color)}>
                    <MUIDataTable
                        title="Projects"
                        data={rowsData()}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </React.Fragment>
        </div>

    );
}
ProjectsTable.defaultProps = {
    headerColor: 'white',
    color: '#2b2b2b'
}
export default ProjectsTable;