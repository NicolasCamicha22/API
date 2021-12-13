import React from "react";
import "react-sweet-progress/lib/style.css";
import MaterialTable from "material-table";
import { useHistory } from 'react-router';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";



const EditableTable = ({ onRowAdd, onRowUpdate, selectedRow, deleteText, data, columns, setData, title, loading, options }) => {
    const history = useHistory();
    const goToForms = (encuesta) => {
        history.push({
          pathname: "/Forms/" + encuesta._id,
          encuesta: encuesta,
        });
      }; 
    return (
        <>
            {
                loading ?
                    <CircularProgress />
                    :
                    (
                        <MaterialTable
                            icons={{ Filter: () => <div /> }} // 
                            title={title}
                            columns={columns}
                            paging
                            data={data}
                            options={{
                                actionsColumnIndex: -1,
                                ...options,
                                titleStyle: {
                                    fontSize: 24
                                }
                            }}
                            localization={{
                                header: {
                                    actions: "",
                                },
                                toolbar: {
                                    searchPlaceholder: "Busque encuesta"
                                },
                                body: {
                                    editRow: {
                                        deleteText: deleteText,
                                    },
                                },
                            }}
                            options={{
                                searchable: false,
                                filtering: true,
                                grouping: false,
                                search: false,
                                showTextRowsSelected: true,
                            }}
                            actions={[
                                {
                                    icon: '*',
                                    onClick: (event, rowData) => 
                                    goToForms(rowData)
                                }
                            ]}
                        />
                    )
            }
        </>
    )
};

export default EditableTable;