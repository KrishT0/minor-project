export default function CollegeSearch() {
     return (
          <div className="search flex">
               <div className="marks flex">
                    <h2>Enter percentile :</h2>
                    <input type="placholder" className="bar" required />
               </div>
               <div className="field flex">
                    <h2>Select field</h2>
                    <div className="filed-name">
                         <div className="flex">
                              <input type="radio" id="Engineering" name="field" value="Engineering" />
                              <label for="Engineering"><h2>Engineering</h2></label>
                         </div>
                         <div className="flex">
                              <input type="radio" id="Medical" name="field" value="Medical" />
                              <label for="Medical"><h2>Medical</h2></label>
                         </div>
                    </div>
               </div>
               <div className="state flex">
                    <label for="State"><h2>State :</h2></label>
                    <select id="State">
                         <option value="State">Select State</option>
                         <option value="Andhra Pradesh">Andhra Pradesh</option>
                         <option value="Delhi">Delhi</option>
                         <option value="Assam">Assam</option>
                         <option value="Bihar">Bihar</option>
                         <option value="Chattisgarh">Chattisgarh</option>
                         <option value="Gujrat">Gujrat</option>
                         <option value="Haryana">Haryana</option>
                         <option value="Himachal Pradesh">Himachal Pradesh</option>
                         <option value="Jharjhand">Jharkhand</option>
                         <option value="Karnataka">Karnataka</option>
                         <option value="Kerala">Kerala</option>
                         <option value="Madhya Pradesh">Madhya Pradesh</option>
                         <option value="Maharashtra">Maharashtra</option>
                         <option value="Manipur">Manipur</option>
                         <option value="Meghalaya">Meghalaya</option>
                         <option value="Mizoram">Mizoram</option>
                         <option value="Nagaland">Nagaland</option>
                         <option value="Odisha">Odisha</option>
                         <option value="Punjab">Punjab</option>
                         <option value="Rajasthan">Rajasthan</option>
                         <option value="Sikkim">Sikkim</option>
                         <option value="Tamil Nadu">Tamil Nadu</option>
                         <option value="Telangana">Telangana</option>
                         <option value="Tripura">Tripura</option>
                         <option value="Uttarakhand">Uttarak</option>
                         <option value="Uttar Pradesh">Uttar Pradesh</option>
                         <option value="West Bengal">West Bengal</option>
                    </select>
               </div>
               <button>Search</button>
          </div>
     )
}