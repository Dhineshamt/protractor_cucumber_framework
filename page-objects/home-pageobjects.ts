import { by, element } from "protractor";

export default class {
    public static btnLearnHTML() {
        return element(by.cssContainingText(`a[class='w3-button tut-button']`, 'Learn HTML'));
    }
}