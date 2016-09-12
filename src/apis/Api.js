import $ from 'jquery';
import {setErrorNotify} from '../actions/NotifyActions';

export function Api() {}

Object.assign(Api.prototype, {
  _makeRequest: function(endpoint, type, headers, data, dataType){
    return(
      $.ajax({
        url : process.env.API_ENDPOINT + endpoint,
        dataType : dataType,
        headers : headers,
        type : type,
        data : data
      })
    ).fail(function(response){
      console.log('response', response);
      if (response.readyState === 0){
        //TODO trigger setErrorNotify("Network error.")
        return false;
      }

    });
  }
});

export default Api;
