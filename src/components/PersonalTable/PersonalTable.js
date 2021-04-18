import React from 'react';
import { Avatar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';

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

const PersonalTable = props => {

    const { data , color, headerColor } = props;

    const columns = [
        { name: "name" , label:'Name' },
        { name: "Team" },
        {
            name: "avatar",
            label : "Avatar",
            options: {
                customBodyRender: value => {
                    return (<Avatar src={value}/>)
                }
            }
        },
        {
            name: "joinedAt",
            label : "Joined At"
        }
    ]

    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRows: 'none',
        responsive: 'vertical',
        tableBodyHeight: '200px',
    };

    const rowsData = () => {
            return [data]
    }


    return (
        <div className="tableContainer">
            <React.Fragment>
                <MuiThemeProvider theme={theme(headerColor, color)}>
                    <MUIDataTable
                        title="Personal Details"
                        data={rowsData()}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </React.Fragment>
        </div>

    );
}
PersonalTable.defaultProps = {
    headerColor: 'white',
    color: '#2b2b2b'
}
export default PersonalTable;