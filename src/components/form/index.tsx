import { useForm, useWatch } from "rc-field-form-modern";
import { attachPropertiesToComponent } from "../../utils/attach-properties-to-component";
import { Form } from "./form";
import { FormArray } from "./form-array";
import { FormItem } from "./form-item";
import { FormSubscribe } from "./form-subscribe";
import { Header } from "./header";
import "./index.less";

export type FormLayout = "vertical" | "horizontal";
export type {
  FieldData,
  NamePath,
  Rule,
  RuleObject,
  RuleRender,
  ValidateMessages,
} from "rc-field-form-modern/dist/interface";
export type { FormInstance, FormProps } from "./form";
export type {
  FormArrayField,
  FormArrayOperation,
  FormArrayProps,
} from "./form-array";
export type { FormItemProps } from "./form-item";
export type { FormSubscribeProps } from "./form-subscribe";

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  Subscribe: FormSubscribe,
  Header,
  Array: FormArray,
  useForm,
  useWatch,
});
