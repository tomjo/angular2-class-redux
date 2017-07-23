import {voteReducer} from "./votes/vote-reducer";
import {VoteState} from "./votes/vote-state";

export const ROOT_REDUCER = {
  votes: voteReducer
};

export interface ApplicationState {
  votes: VoteState
};
