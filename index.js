import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const saveToken = async (token) => {
  if(!token.length) {
    printError("Token not found")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("token saved");
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    //help
    printHelp();
  }

  if (args.s) {
    // save city
  }
  if (args.t) {
    //save token
    return saveToken(args.t);
  }
  getWeather('Uzbekistan')
};

startCLI();
