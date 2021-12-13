import React from 'react'
import { Grid } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Paper, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Alert from '@material-ui/lab/Alert';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider'; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

//importo 
import { guardarEncuesta } from "../../controller/miApp.controller";

const useStylesFormControl = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

function QuestionsTab(props) {

  const classes2 = useStylesFormControl();
  const history = useHistory();
  const [questions, setQuestions] = React.useState([]);
  const [formData, setFormData] = React.useState({});
  const [loadingFormData, setLoadingFormData] = React.useState(false);
  const [tituloEncuesta, setTituloEncuesta] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [tamaño, setTamaño] = React.useState("");
  const [valorReferencia, setValorReferencia] = React.useState([]);

  const handleTituloEncuesta = (event) => {
    setTituloEncuesta(event.target.value);
  }
  const handleSector = (event) => {
    setSector(event.target.value);
  }
  const handleTamaño = (event) => {
    setTamaño(event.target.value);
  }
  function handleValorReferencia2(valor, i) {
    var valores = [...valorReferencia];
    valores[i] = valor;
    setValorReferencia(valores);
  }

  const redirect = async () => {
    const ok = await subirEncuesta()
    //const ok = true
    if (ok) {
      alert("Encuesta subida a la Base de datos.")
      history.push("/ABEncuestas")
    }
  }

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  const subirEncuesta = async function () {
    let archivoEncuesta = false;

    if (!isEmpty(tituloEncuesta) && !isEmpty(sector) && !isEmpty(tamaño) && !isEmpty(questions) && !isEmpty(valorReferencia)) {

      archivoEncuesta = await guardarEncuesta(tituloEncuesta, sector, tamaño, questions, valorReferencia);
    }
    else {
      alert("Completar todos los datos.")
    }
    return archivoEncuesta
  }

  React.useEffect(() => {
    if (props.formData.questions !== undefined) {
      if (props.formData.questions.length === 0) {
        setQuestions([{ questionText: "Pregunta", options: [{ optionText: "Respuesta 1" }], open: false }]);
      } else {
        setQuestions(props.formData.questions)
      }
      setLoadingFormData(false)
    }
    setFormData(props.formData)
  }, [props.formData])

  function addMoreQuestionField() {
    expandCloseAll();
    setQuestions(questions => [...questions, { questionText: "Pregunta", options: [{ optionText: "Respuesta 1" }], open: true }]);
  }

  function copyQuestion(i) {
    let qs = [...questions];
    expandCloseAll();
    const myNewOptions = [];
    qs[i].options.forEach(opn => {
      if ((opn.optionImage !== undefined) || (opn.optionImage !== "")) {
        var opn1new = {
          optionText: opn.optionText,
          optionImage: opn.optionImage
        }
      }
      myNewOptions.push(opn1new)
    });
    const qImage = qs[i].questionImage || "";
    var newQuestion = { questionText: qs[i].questionText, questionImage: qImage, options: myNewOptions, open: true }
    setQuestions(questions => [...questions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs)
  }

  function handleOptionValue(text, i, j) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j].optionText = text;
    setQuestions(optionsOfQuestion);
  }

  function handleQuestionValue(text, i) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].questionText = text;
    setQuestions(optionsOfQuestion);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQuestions(itemF);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function showAsQuestion(i) {
    let qs = [...questions];
    qs[i].open = false;
    setQuestions(qs);
  }

  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({ optionText: "Respuesta " + (optionsOfQuestion[i].options.length + 1) })
    } else {
      console.log("Max  5 options ");
    }
    //console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion)
  }

  function removeOption(i, j) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion)
      console.log(i + "__" + j);
    }
  }

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;

      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + 'id'} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ width: '100%', marginBottom: '-7px' }}>
                  <DragIndicatorIcon style={{ transform: "rotate(-90deg)", color: '#DAE0E2' }} fontSize="small" />
                </div>

                <Accordion onChange={() => { handleExpand(i) }} expanded={questions[i].open}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    elevation={1} style={{ width: '100%' }}
                  >
                    {!questions[i].open ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '3px', paddingTop: '15px', paddingBottom: '15px' }}>
                        <Typography variant="subtitle1" style={{ marginLeft: '0px' }}>{i + 1}.  {ques.questionText}</Typography>
                        {ques.options.map((op, j) => (
                          <div key={j}>
                            <div style={{ display: 'flex' }}>
                              <FormControlLabel disabled control={<Radio style={{ marginRight: '3px', }} />} label={
                                <Typography style={{ color: '#555555' }}>
                                  {ques.options[j].optionText}
                                </Typography>
                              } />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : ""}
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', marginTop: '-15px' }}>
                      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <Typography style={{ marginTop: '20px' }}>{i + 1}.</Typography>
                        <TextField
                          fullWidth={true}
                          placeholder="Question Text"
                          style={{ marginBottom: '18px' }}
                          rows={2}
                          rowsMax={20}
                          multiline={true}
                          value={ques.questionText}
                          variant="filled"
                          onChange={(e) => { handleQuestionValue(e.target.value, i) }}
                        />
                      </div>
                      <div style={{ width: '100%' }}>
                        {ques.options.map((op, j) => (
                          <div key={j}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px' }}>
                              <TextField
                                fullWidth={true}
                                type='Number'
                                placeholder="Ingrese la respuesta..."
                                style={{ marginTop: '5px' }}
                                value={ques.options[j].optionText}
                                onChange={(e) => { handleOptionValue(e.target.value, i, j) }}
                              />
                              <IconButton aria-label="delete" onClick={() => { removeOption(i, j) }}>
                                <CloseIcon />
                              </IconButton>
                            </div>
                          </div>
                        ))}
                      </div>
                      {ques.options.length < 5 ? (
                        <div>
                          <FormControlLabel disabled control={<Radio />} label={
                            <Button size="small" onClick={() => { addOption(i) }} style={{ textTransform: 'none', marginLeft: "-5px" }}>
                              Agregar Respuesta
                    </Button>
                          } />
                        </div>
                      ) : ""}
                      <TextField
                        id="titulo"
                        label="Valor de referencia:"
                        variant="outlined"
                        type='Number'
                        value={valorReferencia[i]}
                        onChange={(e) => { handleValorReferencia2(e.target.value, i) }}
                      />
                      <br></br>
                      <br></br>
                    </div>
                  </AccordionDetails>
                  <Divider />
                  <AccordionActions>
                    <IconButton aria-label="View" onClick={() => { showAsQuestion(i) }}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="Copy" onClick={() => { copyQuestion(i) }}>
                      <FilterNoneIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </AccordionActions>
                </Accordion>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
    )
  }

  return (
    <div style={{ marginTop: '15px', marginBottom: '7px', paddingBottom: "30px" }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {loadingFormData ? (<CircularProgress />) : ""}
        <Grid item xs={12} style={{ width: '100%' }}>
          <Grid style={{ borderTop: '10px solid teal', borderRadius: 10 }}>
            <div>
              <div>
                <Paper elevation={2} style={{ width: '100%' }}>
                  <br></br>
                  <div>
                  <Alert severity="info"> Los valores de las respuestas y valor de referencia deben ser numericos</Alert>
             
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '2%', paddingBottom: '2%' }}>
                    <Typography variant="h4" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                      <TextField
                        id="titulo"
                        label="Titulo Encuesta"
                        variant="outlined"
                        inputProps={{
                          onChange: (event) => handleTituloEncuesta(event),
                        }}
                      />
                      <FormControl variant="outlined" className={classes2.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Tamaño</InputLabel>
                        <Select
                          id="tamaño"
                          value={tamaño}
                          onChange={handleTamaño}
                        >
                          <MenuItem value="">
                            <em>Ninguno seleccionado</em>
                          </MenuItem>
                          <MenuItem value={"Pequeña"}>Pequeña</MenuItem>
                          <MenuItem value={"Mediana"}>Mediana</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl variant="outlined" className={classes2.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Sector</InputLabel>
                        <Select
                          value={sector}
                          onChange={handleSector}
                          label="Sector"
                        >
                          <MenuItem value="">
                            <em>Ninguno seleccionado</em>
                          </MenuItem>
                          <MenuItem value={"Elaboraciòn de productos alimenticios y/o bebidas"}>Elaboraciòn de productos alimenticios y/o bebidas</MenuItem>
                          <MenuItem value={"Fabricación de productos textiles"}>Fabricación de productos textiles</MenuItem>
                          <MenuItem value={"Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles"}>Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles</MenuItem>
                          <MenuItem value={"Fabricación de papel y productos de papel"}>Fabricación de papel y productos de papel</MenuItem>
                          <MenuItem value={"Fabricación de sustancias y productos químicos"}>Fabricación de sustancias y productos químicos</MenuItem>
                        </Select>
                      </FormControl>

                      {formData.name}
                    </Typography>
                    <Typography variant="subtitle1">{formData.description}</Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid style={{ paddingTop: '10px' }}>
            <div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {questionsUI()}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {questions.length < 5 ? (
                <div>
                  <Button
                    variant="contained"
                    onClick={addMoreQuestionField}
                    endIcon={<AddCircleIcon />}
                    style={{ margin: '15px' }}
                  >Agregar Pregunta </Button>
                </div>
              ) : ""}
              <Button
                variant="contained"
                color="primary"
                style={{ margin: '15px' }}
                endIcon={<SaveIcon />}
                onClick={() => { redirect() }}
              >Guardar Encuesta </Button>


            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default QuestionsTab