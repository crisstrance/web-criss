import React, {useState, useContext} from 'react'
import { Context } from '../store/appContext'

export const FormSteps = ({ step, formData, filteredExercises, addedExercises, selectedCategory, searchTerm, setSearchTerm, setSelectedCategory, isExerciseSelected, handleOpenModal, handleInputChange, handleCreateRoutine, handleChooseDays, setIsFinishModalOpen }) => {
  const { store, actions } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  const closeDropdown = () => setIsOpen(false)

  return (
    <form className="w-full">
      {step === 1 && (
        <>

          {/* Paso 1: Nombre de la rutina */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-neutral-200">Nombre de la Rutina</label>
            <input
              id="name"
              type="text"
              value={formData.routineName}
              onChange={handleInputChange("routineName")}
              className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:ring-emerald-500 focus:border-emerald-500 text-neutral-200 caret-emerald-500"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={handleCreateRoutine}
              className="disabled:bg-emerald-300 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-all ease-in"
              disabled={formData.routineName == '' ? true : false}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="w-full flex flex-col">
          {/* Paso 2: Semana y Día */}
          <div className="w-full flex gap-5 flex-col sm:flex-row sm:gap-10 sm:justify-between mb-5">
            <div className="w-full sm:w-1/2">
              <label htmlFor="day" className="block mb-2 text-sm font-bold text-neutral-100">Días</label>
              <select
                id="day"
                value={formData.selectedDay}
                onChange={handleInputChange("selectedDay")}
                className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:ring-emerald-500 focus:border-emerald-500 text-neutral-200"
                required
              >
                <option value="">Elige un día</option>
                <option value="LUNES">Lunes</option>
                <option value="MARTES">Martes</option>
                <option value="MIERCOLES">Miércoles</option>
                <option value="JUEVES">Jueves</option>
                <option value="VIERNES">Viernes</option>
                <option value="SABADO">Sábado</option>
                <option value="DOMINGO">Domingo</option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-4 flex-col items-center sm:flex-row sm:w-fit self-end">
            <button
              type="button"
              onClick={() => setCancelRoutineCreation(true)}
              className="bg-transparent hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-all ease-in"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleChooseDays}
              className="disabled:bg-emerald-300 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-all ease-in"
              disabled={formData.selectedDay == '' || formData.selectedWeek == '' ? true : false}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='w-full flex flex-col'>
          {/* Paso 3: Ejercicios */}
          <div className="flex flex-row flex-wrap gap-2 w-full items-end justify-end mb-5">

            {/* search input */}
            <div className="relative">
              <label htmlFor="Search" className="sr-only"> Search for... </label>
              <input
                type="text"
                id="Search"
                placeholder="buscar ejercicios..."
                className="border-none max-w-40 h-8 rounded-md px-4 py-2 pe-10 shadow-sm sm:text-sm dark:bg-neutral-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <span
                  className="text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </span>
            </div>

            {/* filtrar */}
            <div>
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="bg-neutral-900 border-none text-neutral-300 text-sm/none font-medium ms-2 md:me-2 px-4 py-2 h-8 rounded-md focus:ring-transparent focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option className="flex items-center border-e px-4 py-2 text-sm/none font-medium text-neutral-600 dark:border-e-neutral-800 dark:text-neutral-300" value="">
                  Filtrar
                </option>
                {store.allCategoryList.map((item, index) => (
                  <option key={index} className="lowercase px-4 py-2" value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* lista de ejercicios */}
            <div className="relative">
              <div className="inline-flex items-center overflow-hidden rounded-md h-8 border bg-white dark:border-neutral-800 dark:bg-neutral-900">
                <div
                  className="border-e px-4 py-2 text-sm/none font-medium text-neutral-600 dark:border-e-neutral-800 dark:text-neutral-300"
                >
                  Ejercicios
                  <span className={`bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-medium ms-2 me-2 px-2.5 py-0.5 rounded-full`}>
                    {addedExercises.length}
                  </span>
                </div>

                <button
                  className="h-full p-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div
                  className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-neutral-100 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                  role="menu"
                >
                  {addedExercises.length > 0 ? (
                    addedExercises.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between rounded-lg px-4 py-2 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                        role="menuitem"
                      >
                        <div>
                          {item.name} - <span className="text-neutral-500">{item.exerciseSet.sets}/{item.exerciseSet.repetitions}</span>
                        </div>
                        <button onClick={() => handleAddExercises(item.id, item.name)} type="button" className="w-fit flex p-1 cursor-pointer items-center justify-center rounded-lg border-neutral-200 bg-white text-neutral-500 hover:text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:peer-checked:text-neutral-300 active:scale-95 transition-all ease-in">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                          </div>
                        </button>
                      </div>
                    ))) : (
                    <div
                      className="block rounded-lg px-4 py-2 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      No hay ejercicios
                    </div>
                  )
                  }
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredExercises.map((item, index) => {
              return (
                <article key={item.id} className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full flex bg-white transition-all shadow-xl dark:bg-neutral-900 border border-neutral-700 rounded-md overflow-hidden">
                  <div className="hidden sm:block sm:basis-36">
                    <img
                      alt=""
                      src="https://placehold.jp/303031/878787/150x150.png?text=placeholder%20image"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-1 flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-3 dark:border-white/10">
                      <h3 className="font-bold uppercase text-neutral-900 dark:text-white">
                        {item.name}
                      </h3>
                      <span className="rounded-full bg-neutral-800 px-2 w-fit py-1 text-xs font-medium lowercase text-neutral-400 text-center">
                        {item.category}
                      </span>
                    </div>
                    <div className="self-end">
                      <input
                        checked={isExerciseSelected(item.id)}
                        onChange={() => handleOpenModal(item)} // Solo abre la modal al cambiar el estado del checkbox
                        type="checkbox"
                        id={`react-${index}`}
                        className="peer hidden"
                      />
                      <label
                        htmlFor={`react-${index}`}
                        className="dark:hover:text-emerald-400 flex size-6 cursor-pointer items-center justify-center rounded-lg bg-white p-5 text-neutral-500 transition-all ease-in hover:bg-neutral-50 hover:text-emerald-400 active:scale-95 peer-checked:bg-gradient-to-br peer-checked:from-emerald-600 peer-checked:to-green-400 peer-checked:text-neutral-700 dark:border-emerald-600 dark:bg-neutral-800 dark:text-emerald-600 dark:hover:bg-neutral-700 dark:peer-checked:text-neutral-900"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-plus size-8"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                          </svg>
                        </div>
                      </label>
                    </div>


                  </div>
                </article>
              )
            })}
          </div>

          <div className="w-full flex gap-4 flex-col items-center sm:flex-row sm:w-fit self-end">
            <button
              type="button"
              onClick={() => setCancelRoutineCreation(true)}
              className="bg-transparent hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-all ease-in"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => setIsFinishModalOpen(true)}
              className="disabled:bg-emerald-300 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-all ease-in"
              disabled={addedExercises.length == 0 ? true : false}
            >
              Finalizar
            </button>
          </div>
        </div>
      )}
    </form>
  )
}