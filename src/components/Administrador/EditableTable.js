import React from "react";
import "react-sweet-progress/lib/style.css";
import MaterialTable from "material-table";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const EditableTable = ({onRowAdd, onRowUpdate, onRowDelete, deleteText, data, columns, setData, title, loading, options}) => {
 
    return (
        <>
            {
                loading ?
                    <CircularProgress/>
                    :
                    (

                        <MaterialTable
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
                                    actions: "Acciones",
                                },
                                toolbar: {
                                    searchPlaceholder: "Busque usuario"
                                },
                                body: {
                                    editRow: {
                                        deleteText:
                                        deleteText,
                                    },
                                },
                            }}
                            editable={{
                                onRowAdd: newData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            onRowAdd(newData, resolve);
                                        }, 1000)
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            onRowUpdate(oldData, newData, resolve)
                                        }, 1000)
                                    }),
                                onRowDelete: oldData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            onRowDelete(oldData, resolve);
                                        }, 1000)
                                    }),
                            }}
                        />
                    )
            }
        </>
    )
};

export default EditableTable;