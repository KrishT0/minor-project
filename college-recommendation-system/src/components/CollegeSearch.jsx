export default function CollegeSearch() {
     return (
          <div className="search flex">
               <div className="marks flex">
                    <h2>Enter marks :</h2>
                    <input type="placholder" className="bar" />
               </div>
               <div className="field flex">
                    <h2>Select field</h2>
                    <div className="filed-name">
                    <div className="flex">
                         <input type="radio" id="Engineering" name="field" value="Engineering" />
                         <label for="Engineering"><h3>Engineering</h3></label>
                    </div>
                    <div className="flex">
                         <input type="radio" id="Medical" name="field" value="Medical"/>
                         <label for="Medical"><h3>Medical</h3></label>
                    </div>
                    </div>
               </div>
               <button>Search</button>
          </div>
     )
}