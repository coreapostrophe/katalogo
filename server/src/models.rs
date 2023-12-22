use serde::Serialize;

#[derive(Serialize)]
pub struct Status {
    pub data: String,
}
