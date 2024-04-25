import { IconButton} from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

 interface Props {
    isCheck: boolean
    isShow?: boolean
    handleCheck?: () => void
    handleShow?: () => void
 }
const ToBtnAction = ({isCheck,isShow = false,handleCheck,handleShow}:Props) => {
    
  return (
    <>
        {isShow ? (
            <IconButton onClick={handleShow}>
                <RemoveRedEyeIcon color='primary'/>
            </IconButton>

        ) : (
            <>
                <IconButton onClick={handleCheck}>{
                isCheck ? <LibraryAddIcon color='primary'/> : <LibraryAddCheckIcon color='success'/>
            }</IconButton>
            </>
            
        )

        }
    </>
    
  )
}

export default ToBtnAction
