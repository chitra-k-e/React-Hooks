import React from 'react';
import '../Components/Book.css';

function Book() {
    return (
        <div className="bg">
            <form className="form">
                <fieldset>
                    <legend>
                        <p class="title">Slam Book</p>
                    </legend>
                    <div className="f1">
                        <div className="f2">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="nick">Nickname: </label>
                            <input type="text" id="nick" />
                        </div>
                        <div>
                            <label htmlFor="birth">Address: </label>
                            <input type="text" id="birth" />
                        </div>
                        <div>
                            <label htmlFor="memories">Memories: </label>
                            <textarea id="memories" placeholder="Write your memories..." rows="4" />
                        </div>
                        <div>
                            <label>Gender: </label>
                            <div className="f5">
                                <label htmlFor="male">
                                    <input type="radio" id="male" name="gender" value="male" /> Male
                                </label>
                                <label htmlFor="female">
                                    <input type="radio" id="female" name="gender" value="female" /> Female
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>Favourite Actors: </label>
                            <div className="f5">
                                <label htmlFor="actor1">
                                    <input type="checkbox" id="actor1" value="actor1" /> Actor 1
                                </label>
                                <label htmlFor="actor2">
                                    <input type="checkbox" id="actor2" value="actor2" /> Actor 2
                                </label>
                                <label htmlFor="actor3">
                                    <input type="checkbox" id="actor3" value="actor3" /> Actor 3
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>School: </label>
                            <select id="school">
                                <option value=""></option>
                                <option value="SSM">SSM</option>
                                <option value="Barathi Vidyala">Barathi Vidyala</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Book;
