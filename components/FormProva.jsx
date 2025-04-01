"use client";
import { useState } from 'react';
import styles from './CardForm.module.css';
import Countdown from './Countdown';
import { useEffect } from 'react';

export const numeroPersone = [
    { key: "solo io", label: "Solo io" },
    { key: "2", label: "2 Persone" },
    { key: "3", label: "3 Persone" },
    { key: "4", label: "4 Persone" },
    { key: "5", label: "5 Persone" },
    { key: "6", label: "6 Persone" },
];

export const numeroAdulti = [
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "6", label: "6" },
];

export const numeroBambini = [
    { key: "0", label: "0" },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
];

export const numeroPostiVuoti = [
    { key: "0", label: "0" },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
];

export const nMenuPesce = [
    { key: "0", label: "0" },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "6", label: "6" },
]

export const nMenuCarne = [
    { key: "0", label: "0" },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "6", label: "6" },
]

export const nMenuVegetariano = [
    { key: "0", label: "0" },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "6", label: "6" },
]

const Letter = () => {

    // countdown
    const [isCountdownVisible, setIsCountdownVisible] = useState(true); // Stato per controllare la visibilità
    useEffect(() => {
        const now = new Date();
        const weddingDate = new Date('2025-07-25T00:00:00');

        // Controlliamo se la data attuale è uguale o successiva alla data del matrimonio
        if (now >= weddingDate) {
            setIsCountdownVisible(false); // Nascondi il countdown
        }
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const toggleLetter = () => {
        setIsOpen(prevState => !prevState);
    };


    const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    const [hasAllergies, setHasAllergies] = useState(false);
    const [allergies, setAllergies] = useState('');
    const [people, setPeople] = useState('solo io');
    const [adults, setAdults] = useState('1');
    const [bambini, setBambini] = useState('0');
    const [postiVuoti, setPostiVuoti] = useState('0');
    const [menuPesce, setMenuPesce] = useState('0');
    const [menuCarne, setMenuCarne] = useState('0');
    const [menuVegetariano, setMenuVegetariano] = useState('0');

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, hasAllergies, allergies, people, adults, bambini, postiVuoti, menuPesce, menuCarne, menuVegetariano };
        // console.log('Form data being sent:', formData);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Grazie! La tua risposta è stata inviata correttamente.');
                // Reset form fields
                setName('');
                // setSurname('');
                setHasAllergies(false);
                setAllergies('');
                setPeople('solo io');
                setAdults('1');
                setBambini('0');
                setPostiVuoti('0');
                setMenuCarne('0');
                setMenuPesce('0');
                setMenuVegetariano('0');

                // Chiudi automaticamente la lettera
                setIsOpen(false);
            } else {
                const errorData = await response.json();
                // console.error('Submission error:', errorData);
                setMessage('Errore nell\'invio della risposta. Riprova.');
            }
        } catch (error) {
            // console.error('Error submitting form:', error);
            setMessage('Errore nell\'invio della risposta. Riprova.');
        }
    };



    const [paperHeight, setPaperHeight] = useState(0);

    // Effetto per calcolare l'altezza di `.paper`
    useEffect(() => {
        if (isOpen) {
            const updatePaperHeight = () => {
                const paper = document.querySelector(`.${styles.paper}`);
                if (paper) {
                    const height = paper.offsetHeight;
                    setPaperHeight(height);

                    // Log dell'altezza della `.paper`
                    console.log(`Altezza della paper (lettera aperta): ${height}px`);
                }
            };

            // Calcola l'altezza una volta quando la lettera è aperta
            updatePaperHeight();
            window.addEventListener('resize', updatePaperHeight);

            // Cleanup al momento dello smontaggio
            return () => window.removeEventListener('resize', updatePaperHeight);
        }
    }, [isOpen]);

    return (
        <>
            <div className={`${styles.letter} ${isOpen ? styles.letterOpen : styles.letterClose}`}>
                <div
                    className={styles.envelope}
                    onClick={toggleLetter}
                    style={{
                        transform: isOpen
                            ? `translateY(calc(${paperHeight}px + 35vh))`
                            : 'translateY(0)',
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={styles.envelopeFlap}></div>
                    <div className={styles.envelopePaper}></div>
                    <div className={styles.envelopeDetail}></div>
                </div>

                <div className={styles.paper}>
                    <div className={styles.paperContent}>
                        <form onSubmit={handleSubmit} className="w-[80vw] text-secondary p-[5%] bg-opacity-10 rounded-md lg:w-[40vw] flex flex-col gap-4 italic z-10">
                            <p className='secondary text-verdeSalviaDark italic'>Referente Principale</p>
                            <input
                                type="text"
                                placeholder="Nome e Cognome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="p-2 outline-none rounded-full"
                            />
                            {/* <input
                                type="text"
                                placeholder="Cognome"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                                className="p-2 outline-none rounded-full"
                            /> */}

                            <label className='secondary flex text-verdeSalviaDark flex-col gap-2'>
                                Quante persone ci saranno?
                                <select
                                    value={people}
                                    onChange={(e) => setPeople(e.target.value)}
                                    className="p-2 rounded-full outline-none bg-white"
                                >
                                    {numeroPersone.map((person) => (
                                        <option key={person.key} value={person.key}>
                                            {person.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary text-verdeSalviaDark flex flex-col gap-2'>
                                Quanti adulti?
                                <select
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="p-2 bg-white rounded-full outline-none"
                                >
                                    {numeroAdulti.map((adult) => (
                                        <option key={adult.key} value={adult.key}>
                                            {adult.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary outline-none flex flex-col gap-2 text-verdeSalviaDark'>
                                Quanti bambini?
                                <select
                                    value={bambini}
                                    onChange={(e) => setBambini(e.target.value)}
                                    className="p-2 bg-white rounded-full outline-none"
                                >
                                    {numeroBambini.map((child) => (
                                        <option key={child.key} value={child.key}>
                                            {child.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary outline-none flex flex-col gap-2 text-verdeSalviaDark'>
                                Se hai bambini piccoli che non mangiano, seleziona qui il numero di posti vuoti che vuoi aggiungere.
                                <select
                                    value={postiVuoti}
                                    onChange={(e) => setPostiVuoti(e.target.value)}
                                    className="p-2 bg-white rounded-full outline-none"
                                >
                                    {numeroPostiVuoti.map((posti) => (
                                        <option key={posti.key} value={posti.key}>
                                            {posti.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary flex text-verdeSalviaDark flex-col gap-2'>
                                Quanti menu di pesce?
                                <select
                                    value={menuPesce}
                                    onChange={(e) => setMenuPesce(e.target.value)}
                                    className="p-2 bg-white rounded-full outline-none"
                                >
                                    {nMenuPesce.map((person) => (
                                        <option key={person.key} value={person.key}>
                                            {person.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary flex text-verdeSalviaDark flex-col gap-2'>
                                Quanti menu di carne?
                                <select
                                    value={menuCarne}
                                    onChange={(e) => setMenuCarne(e.target.value)}
                                    className="p-2 bg-white rounded-full outline-none"
                                >
                                    {nMenuCarne.map((person) => (
                                        <option key={person.key} value={person.key}>
                                            {person.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className='secondary flex text-verdeSalviaDark flex-col gap-2'>
                                Quanti menu vegetariani?
                                <select
                                    value={menuVegetariano}
                                    onChange={(e) => setMenuVegetariano(e.target.value)}
                                    className="p-2 rounded-full bg-white outline-none"
                                >
                                    {nMenuVegetariano.map((person) => (
                                        <option key={person.key} value={person.key}>
                                            {person.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <p className='secondary text-verdeSalviaDark italic'>In famiglia sono presenti intolleranze?</p>
                            <div className="flex gap-4 text-verdeSalviaDark">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="allergies"
                                        value="yes"
                                        className='secondary'
                                        checked={hasAllergies === true}
                                        onChange={() => setHasAllergies(true)}
                                    />
                                    Sì
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="allergies"
                                        value="no"
                                        className='secondary'
                                        checked={hasAllergies === false}
                                        onChange={() => setHasAllergies(false)}
                                    />
                                    No
                                </label>
                            </div>

                            {hasAllergies && (
                                <textarea
                                    placeholder="Di che tipo di intolleranze si tratta?"
                                    value={allergies}
                                    onChange={(e) => setAllergies(e.target.value)}
                                    className="p-2 rounded-lg secondary outline-none"
                                    required
                                    rows="3"
                                />
                            )}

                            <button type="submit" className="bg-salvia text-bianco secondary  hover:bg-verdeSalviaDark  py-2 px-4 rounded-full">
                                Invia
                            </button>

                        </form>


                    </div>
                </div>


                {/* Mostra il messaggio di conferma o errore */}
                {message && <p className="text-center mt-4 secondary">{message}</p>}
            </div >


            <div className='mt-[45%]'>
                {isCountdownVisible && <Countdown />}
            </div>
        </>
    );
};

export default Letter;
