import React from 'react';
class Search extends React.Component {    
    state={entry:"All"}
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }
    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" name="Name" id="inp1" placeholder="Searching..." onChange={(event)=>{this.setState({entry:event.target.value});}} value={this.state.entry}/><i style={{padding: "18px 10px 10px 10px"}} className="fa fa-search"></i>
                        </div>
                    </div>                            
                </form>
            </div>
        )
    }
}
export default Search;