import { Action,createReducer, on } from '@ngrx/store';
import * as dropActions from './actions';
export interface State {
    DropOnePage: boolean;
    DropSecondPage: boolean;
    DropThirdPage: boolean;
  }
export const initialState: State = {
    DropOnePage: true,
    DropSecondPage: false,
    DropThirdPage: false
}
export const dropReducer = createReducer(
initialState,
on(dropActions.ChangeDropOnePage, state => ({...state, DropOnePage: false,DropSecondPage: false,DropThirdPage: false})));
export function reducer(state: State | undefined,action: Action)
{
    return dropReducer(state,action)
}